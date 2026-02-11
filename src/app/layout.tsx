import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "City Protocol",
  description: "City Protocol is a decentralized protocol powering IP Capital Markets; designed for creators to launch, scale, and sustain IP. We bring IP assets, DATs and RWA onchain, powering IP as a global asset class. For the first time, creativity gains liquidity and scalability like companies unlocked through IPOs — now powered by decentralized markets.",
  metadataBase: new URL("https://cityprotocol.co"),
  openGraph: {
    title: "City Protocol",
    description:
      "City Protocol is a decentralized protocol powering IP Capital Markets; designed for creators to launch, scale, and sustain IP. We bring IP assets, DATs and RWA onchain, powering IP as a global asset class. For the first time, creativity gains liquidity and scalability like companies unlocked through IPOs — now powered by decentralized markets.",
    url: "https://cityprotocol.co",
    siteName: "City Protocol",
    images: [
      { url: "/next.svg", width: 1200, height: 630, alt: "City Protocol" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Protocol",
    description:
      "City Protocol is a decentralized protocol powering IP Capital Markets; designed for creators to launch, scale, and sustain IP. We bring IP assets, DATs and RWA onchain, powering IP as a global asset class. For the first time, creativity gains liquidity and scalability like companies unlocked through IPOs — now powered by decentralized markets.",
    images: ["/next.svg"],
  },
  icons: { icon: "/images/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <header className="sr-only">
          <a href="#main">Skip to content</a>
        </header>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
