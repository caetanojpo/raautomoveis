import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Footer from "@/components/footer/Footer";
import FooterContact from "@/components/footer/FooterContact";
import Navbar from "@/components/navbar/Navbar";
import NavbarInfo from "@/components/navbar/NavbarInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RA AUTOMOVEIS",
  description: "HÁ 29 ANOS NO MERCADO VIABILIZANDO SONHOS, DE FORMA TRANSPARENTE, RÁPIDA E EFICIENTE. VENHA FAZER PARTE DESSA EXPERIÊNCIA",
  keywords: [
    "RA AUTOMÓVEIS",
    "RA",
    "automoveis",
    "carros",
    "motos",
    "caminhonetes",
    "jundiai",
    "jipes",
    "motocicletas",
    "revenda",
    "garagem",
    "veiculos",
    "automotores",
  ],
  authors: {
    name: "T_YOU Tecnologia",
    url: "https://www.instagram.com/tyoutecnologia/",
  },
  icons: "/favicon.png",
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "RA AUTOMÓVEIS",
    description:
      "HÁ 29 ANOS NO MERCADO VIABILIZANDO SONHOS, DE FORMA TRANSPARENTE, RÁPIDA E EFICIENTE. VENHA FAZER PARTE DESSA EXPERIÊNCIA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{fontFamily: 'Eina'}}>
        <Providers>
          <Navbar />
          <NavbarInfo/>
          {children}
          <FooterContact />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
