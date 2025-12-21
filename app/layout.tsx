import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Aastha | Real Estate Development, Construction & Interior Design",
    template: "%s | Aastha",
  },
  description:
    "Aastha is a leading company in real estate development, construction, and interior design. We build quality residential and commercial properties with exceptional craftsmanship.",
  keywords: [
    "real estate development",
    "construction",
    "interior design",
    "property development",
    "residential construction",
    "commercial construction",
    "Aastha",
    "building contractor",
    "home design",
  ],
  authors: [{ name: "Aastha" }],
  creator: "Aastha",
  publisher: "Aastha",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aastha",
    title: "Aastha | Real Estate Development, Construction & Interior Design",
    description:
      "Aastha is a leading company in real estate development, construction, and interior design. We build quality residential and commercial properties.",
    images: [
      {
        url: "/assets/heroImg.jpeg",
        width: 1200,
        height: 630,
        alt: "Aastha - Building Your Dreams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastha | Real Estate Development, Construction & Interior Design",
    description:
      "Aastha is a leading company in real estate development, construction, and interior design.",
    images: ["/assets/heroImg.jpeg"],
  },
  icons: {
    icon: "/assets/webLogo.svg",
    shortcut: "/assets/webLogo.svg",
    apple: "/assets/webLogo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased min-h-screen`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
