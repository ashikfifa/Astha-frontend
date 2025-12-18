import HeroSlider from "./components/HeroSlider";
import MottoSection from "./sections/landing-page/MottoSection";
import OurServices from "./sections/landing-page/OurService";
import RecentProjects from "./sections/landing-page/RecentProjects";
import VideoSection from "./sections/landing-page/VideoSection";

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
