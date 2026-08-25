import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOC // Arquivos — Rapeedo",
  description:
    "Portal interno da Rapeedo para técnicos baixarem firmwares, presets e informações de configuração de ONT, ONU e roteadores.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
