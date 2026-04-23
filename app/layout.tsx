import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asenaturkay.com"),
  title: {
    default: "Asena Türkay — Psikolojik Danışman",
    template: "%s | Asena Türkay",
  },
  description:
    "Doktorant Psikolojik Danışman Asena Türkay. Bireysel, aile & çift, ebeveyn, ergen danışmanlığı ve kurumsal psikolojik danışmanlık.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://asenaturkay.com",
    siteName: "Asena Türkay",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-cream">
        <Header />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
