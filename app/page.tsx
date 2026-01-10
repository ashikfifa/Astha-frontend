import { Metadata } from "next";
import HeroSlider from "./components/HeroSlider";
import MottoSection from "./sections/landing-page/MottoSection";
import OurServices from "./sections/landing-page/OurService";
import RecentProjects from "./sections/landing-page/RecentProjects";
import VideoSection from "./sections/landing-page/VideoSection";

export const metadata: Metadata = {
  title: "Aastha Design & Construction | Dreams Mansion | Luxury Apartments in Dhaka",
  description:
    "Aastha Design and Construction - Your trusted partner for luxury apartments in Jolshiri Abashon, Jolshiri Smart City, and Purbachal. Premium real estate development in Bangladesh including Dreams Mansion, Army Housing Project, and NRI apartments. Best real estate investment in Bangladesh.",
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
    "luxury apartment Dhaka",
    "premium flat Bangladesh",
    "real estate developer Bangladesh",
    "construction company Dhaka",
    "interior design Bangladesh",
  ],
  openGraph: {
    title: "Aastha Design & Construction | Dreams Mansion | Luxury Apartments in Dhaka",
    description:
      "Aastha Design and Construction - Premium luxury apartments in Jolshiri Abashon, Jolshiri Smart City, and Purbachal. Best real estate investment in Bangladesh.",
    type: "website",
    locale: "en_BD",
    siteName: "Aastha Design and Construction",
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
      "Premium luxury apartments in Jolshiri Abashon, Jolshiri Smart City. Best real estate investment in Bangladesh.",
    images: ["/assets/heroImg.jpeg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <MottoSection />
      <OurServices />
      {/*<RecentProjects />*/}
      <VideoSection />
    </>
  );
}
