import HeroSlider from "./components/HeroSlider";
import MottoSection from "./sections/MottoSection";
import OurServices from "./sections/OurService";
import RecentProjects from "./sections/RecentProjects";
import VideoSection from "./sections/VideoSection";

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
