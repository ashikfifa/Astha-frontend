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
    default: "Aastha Design & Construction | Dreams Mansion | Luxury Apartments in Dhaka",
    template: "%s | Aastha Design & Construction",
  },
  description:
    "Aastha Design and Construction - Leading real estate developer in Bangladesh. Luxury apartments in Jolshiri Abashon, Jolshiri Smart City, Purbachal. Dreams Mansion, Army Housing Project, apartments for NRIs. Best real estate investment in Bangladesh.",
  keywords: [
    "Dreams Mansion",
    "Jolshiri Abashon",
    "Jolshiri Smart City",
    "Army Housing Project Bangladesh",
    "Luxury Apartments in Dhaka",
    "Apartment in Jolshiri",
    "Aastha Design and Construction",
    "Bangladesh Army Housing",
    "Real Estate Bangladesh",
    "Apartment for NRIs Bangladesh",
    "Luxury Flat in Dhaka",
    "Smart City Bangladesh",
    "Purbachal Apartment",
    "300 Feet Road Apartment",
    "Best Real Estate Investment Bangladesh",
    "real estate development",
    "construction company Bangladesh",
    "interior design Dhaka",
    "property development Bangladesh",
    "residential construction",
    "commercial construction",
    "building contractor Dhaka",
    "home design Bangladesh",
  ],
  authors: [{ name: "Aastha Design and Construction" }],
  creator: "Aastha Design and Construction",
  publisher: "Aastha Design and Construction",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_BD",
    siteName: "Aastha Design and Construction",
    title: "Aastha Design & Construction | Dreams Mansion | Luxury Apartments in Dhaka",
    description:
      "Leading real estate developer in Bangladesh. Luxury apartments in Jolshiri Abashon, Jolshiri Smart City. Dreams Mansion, Army Housing Project, NRI apartments.",
    images: [
      {
        url: "/assets/heroImg.jpeg",
        width: 1200,
        height: 630,
        alt: "Aastha Design and Construction - Dreams Mansion Luxury Apartments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastha Design & Construction | Dreams Mansion | Luxury Apartments",
    description:
      "Leading real estate developer in Bangladesh. Luxury apartments in Jolshiri Abashon, Jolshiri Smart City.",
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
