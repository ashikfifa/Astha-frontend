import { Metadata } from "next";
import HeroSlider from "./components/HeroSlider";
import MottoSection from "./sections/landing-page/MottoSection";
import OurServices from "./sections/landing-page/OurService";
import RecentProjects from "./sections/landing-page/RecentProjects";
import VideoSection from "./sections/landing-page/VideoSection";

export const metadata: Metadata = {
  title: "Aastha | Real Estate Development, Construction & Interior Design",
  description:
    "Welcome to Aastha - Your trusted partner in real estate development, construction, and interior design. We build quality residential and commercial properties with exceptional craftsmanship.",
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <MottoSection />
      <OurServices />
      <RecentProjects />
      <VideoSection />
    </>
  );
}
