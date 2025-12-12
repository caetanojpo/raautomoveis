import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./provider";
import Footer from "../components/Footer/Footer";
import FooterContact from "../components/Footer/FooterContact";
import Navbar from "../components/navbar/Navbar";
import NavbarInfo from "../components/navbar/NavbarInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RA AUTOMOVEIS",
  description:
    "HÁ 29 ANOS NO MERCADO VIABILIZANDO SONHOS, DE FORMA TRANSPARENTE, RÁPIDA E EFICIENTE. VENHA FAZER PARTE DESSA EXPERIÊNCIA",
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
      <body className={inter.className} style={{ fontFamily: "Eina" }}>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NNBTCMJR');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NNBTCMJR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          <Navbar />
          <NavbarInfo />
          {children}
          <FooterContact />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
