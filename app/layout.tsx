import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vizaid Travel - Your Trusted Travel Partner in Uganda",
  description: "Expert air ticketing, visa assistance, and unforgettable tours - both international and domestic. Making your travel dreams come true.",
  keywords: "travel agency Uganda, air ticketing, visa assistance, tours Uganda, gorilla trekking, safari Uganda",
  openGraph: {
    title: "Vizaid Travel - Your Trusted Travel Partner in Uganda",
    description: "Expert air ticketing, visa assistance, and unforgettable tours",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
