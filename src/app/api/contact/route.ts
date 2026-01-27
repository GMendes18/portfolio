import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting - simple in-memory store
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

// Input validation
function validateInput(data: { name?: string; email?: string; message?: string }): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Nome deve ter pelo menos 2 caracteres");
  }

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email é obrigatório");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push("Email inválido");
    }
  }

  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.push("Mensagem deve ter pelo menos 10 caracteres");
  }

  if (data.message && data.message.length > 5000) {
    errors.push("Mensagem muito longa (máximo 5000 caracteres)");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") ||
               request.headers.get("x-real-ip") ||
               "unknown";

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas requisições. Aguarde um momento." },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    const validation = validateInput({ name, email, message });
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    // Check environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Missing email configuration");
      return NextResponse.json(
        { error: "Configuração de email não encontrada. Entre em contato diretamente." },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Sanitize inputs for email
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMessage = message.trim().substring(0, 5000);

    // Send email
    await transporter.sendMail({
      from: gmailUser,
      to: contactEmail,
      replyTo: sanitizedEmail,
      subject: `[Portfolio] Nova mensagem de ${sanitizedName}`,
      text: `
Nome: ${sanitizedName}
Email: ${sanitizedEmail}

Mensagem:
${sanitizedMessage}

---
Enviado pelo formulário do portfolio
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0F172A; color: #22C55E; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; }
    .value { margin-top: 5px; }
    .message { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #22C55E; }
    .footer { margin-top: 20px; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">Nova Mensagem do Portfolio</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Nome:</div>
        <div class="value">${sanitizedName}</div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Mensagem:</div>
        <div class="message">${sanitizedMessage.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        Enviado pelo formulário do portfolio
      </div>
    </div>
  </div>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
