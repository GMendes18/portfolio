import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Mendes | Desenvolvedor Full-Stack",
  description:
    "Transformo ideias em software funcional. Desenvolvedor Full-Stack especializado em React, Node.js, TypeScript e automação com IA.",
  keywords: [
    "desenvolvedor",
    "full-stack",
    "react",
    "node.js",
    "typescript",
    "next.js",
    "freelancer",
    "automação",
    "inteligência artificial",
  ],
  authors: [{ name: "Gabriel Mendes" }],
  openGraph: {
    title: "Gabriel Mendes | Desenvolvedor Full-Stack",
    description:
      "Transformo ideias em software funcional. Desenvolvedor Full-Stack especializado em React, Node.js, TypeScript e automação com IA.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Mendes | Desenvolvedor Full-Stack",
    description:
      "Transformo ideias em software funcional. Desenvolvedor Full-Stack especializado em React, Node.js, TypeScript e automação com IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
