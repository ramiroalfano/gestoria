import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LexFinance | Estudio Jurídico y Contable",
  description: "Tranquilidad legal y financiera para tu futuro. Ofrecemos asesoría integral especializada en áreas civil, laboral, impuestos y auditoría. Protegemos tus intereses con excelencia.",
  keywords: "estudio jurídico, estudio contable, abogados, contadores, derecho civil, derecho laboral, impuestos, auditoría, asesoramiento legal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
