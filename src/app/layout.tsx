import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "City Protocol",
  description: "The IP Capital Market Starts Here",
  metadataBase: new URL("https://city.example.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "City Protocol",
    description:
      "Solutions and resources to grow the inner power of intellectual property.",
    url: "https://city.example.com",
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
      "Solutions and resources to grow the inner power of intellectual property.",
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
