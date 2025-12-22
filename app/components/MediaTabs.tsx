import { MediaTab } from "../utils/type";

interface MediaTabsProps {
  activeTab: MediaTab;
  onTabChange: (tab: MediaTab) => void;
}

export default function MediaTabs({ activeTab, onTabChange }: MediaTabsProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={() => onTabChange("photos")}
        className={`px-6 py-2 cursor-pointer rounded-full text-sm md:text-base font-bold transition-all duration-200 ${
          activeTab === "photos"
            ? "bg-[#06ecff] text-black"
            : "bg-[#06ecff]/25 text-black hover:bg-[#06ecff]/40"
        }`}
      >
        Photos
      </button>
      <button
        onClick={() => onTabChange("video")}
        className={`px-6 py-2 rounded-full cursor-pointer text-sm md:text-base font-bold transition-all duration-200 ${
          activeTab === "video"
            ? "bg-[#06ecff] text-black"
            : "bg-[#06ecff]/25 text-black hover:bg-[#06ecff]/40"
        }`}
      >
        Video
      </button>
    </div>
  );
}