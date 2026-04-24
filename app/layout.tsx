import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
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
    default: "Asena Türkay — Doktorant Psikolojik Danışman",
    template: "%s · Asena Türkay",
  },
  description:
    "Doktorant Psikolojik Danışman Asena Türkay. Bireysel, aile & çift, ebeveyn, ergen danışmanlığı; kurumsal psikolojik danışmanlık ve akademik atölyeler.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://asenaturkay.com",
    siteName: "Asena Türkay",
    images: ["/images/hero-botanical.jpg"],
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
    <html lang="tr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-cream text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
