import ImageModal from "@/components/ImageModel";
import InfiniteScrollingLogosAnimation from "@/components/InfiniteScrollingLogosAnimation";
import VerticalAnimatedPosters from "@/components/VerticalAnimatedPosters";
import { desLogos } from "@/constants/skills";
import React from "react";

export default function () {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [poster, setPoster] = React.useState("");
  return (
    <section
      id="posters"
      className={"sm:min-h-screen w-[95%] max-w-8xl mx-auto mt-30 relative"}
    >
      <div className="w-full flex flex-col items-end ">
        <h2 className="text-[#FFE9D0] text-5xl md:text-6xl lg:text-8xl font-medium  tracking-tighter">
          Posters
        </h2>
        <p className="text-sm sm:text-lg font-light pl-1 text-white/70 max-w-md">
          click to view the poster
        </p>
      </div>
      <VerticalAnimatedPosters
        setPoster={setPoster}
        setIsModalOpen={setIsModalOpen}
      />
      <ImageModal
        isOpen={isModalOpen}
        src={poster}
        alt="Poster"
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
