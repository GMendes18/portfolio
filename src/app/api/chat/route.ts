import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

const SYSTEM_PROMPT = `Você é o assistente virtual do Gabriel Mendes, um desenvolvedor Full-Stack especializado em automação com IA.

INFORMAÇÕES SOBRE O GABRIEL:
- Desenvolvedor Full-Stack com foco em React, Next.js, Node.js, TypeScript, PostgreSQL e MySQL
- Especialista em automação com IA (Claude, GPT, Gemini)
- Oferece serviços de: Desenvolvimento Web, Aplicações SaaS, Automação com IA, MVPs para Startups, Manutenção de Sites e Resolução de Bugs
- Contato: gabri.mevial@gmail.com | WhatsApp: (31) 99977-9157
- LinkedIn: linkedin.com/in/gabriel-mendes18 | GitHub: github.com/GMendes18

PROJETOS DESTAQUE:
- Financy Dashboard: Sistema de gestão financeira com análise de gastos com IA, cotação de moedas em tempo real

SEU COMPORTAMENTO:
- Seja simpático, profissional e objetivo
- Responda em português brasileiro
- Se perguntarem sobre preços, diga que os valores são combinados de acordo com a complexidade do projeto e sugira entrar em contato
- Se perguntarem algo que você não sabe sobre o Gabriel, sugira entrar em contato diretamente
- Mantenha respostas curtas (máximo 3 frases) a menos que peçam detalhes
- Sempre tente direcionar para um contato ou ação`;

// Rate limiting simples
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 10;

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

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas mensagens. Aguarde um momento." },
        { status: 429 }
      );
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API não configurada" },
        { status: 500 }
      );
    }

    const { message, history } = await request.json();

    if (!message || typeof message !== "string" || message.length > 500) {
      return NextResponse.json({ error: "Mensagem inválida" }, { status: 400 });
    }

    // Monta o histórico de conversa para o Gemini
    const contents = [
      {
        role: "user",
        parts: [{ text: SYSTEM_PROMPT }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Entendido! Sou o assistente do Gabriel Mendes e estou pronto para ajudar.",
          },
        ],
      },
      ...(history || []).map((msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 256,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Gemini API error:", error);
      return NextResponse.json(
        { error: "Erro ao processar mensagem" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Desculpe, não consegui processar sua mensagem. Tente novamente.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
