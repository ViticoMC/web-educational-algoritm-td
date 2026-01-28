import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutClient } from "./layout-client";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DB Theory Lab - Suite Educativa",
  description: "Analiza dependencias funcionales y normaliza relaciones a 3NF o BCNF utilizando la Suite de Algoritmos",
  keywords: [
    "Base de Datos", "Teoría del Diseño", "Dependencias Funcionales", "Clausura", "Normalización", "3NF", "BCNF", "Relaciones"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Script src="/theme-script.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`}
      >
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
