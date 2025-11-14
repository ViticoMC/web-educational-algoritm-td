import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/app-provider";
import Nav from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Educational Algoritm TD",
  description: "Creada por Victor Manuel Martinez campo",
  keywords: [
    "Base de datos ", "Teoría del Diseño ", "Dependencias Funcionales", 'Clausura ', "Conjuntos", "Relaciones"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        <AppProviders>
          <Nav />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
