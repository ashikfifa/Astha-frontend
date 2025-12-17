import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />

      {/* Rest of your page content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Building Spaces that Build Your Future
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Quality developments designed for comfort, value, and long-term
            growth
          </p>
        </div>
      </section>
    </main>
  );
}
