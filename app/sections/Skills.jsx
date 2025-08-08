import { AnimatedBackground } from "@/components/AnimatedBackground";
import InfiniteScrollingLogosAnimation from "@/components/InfiniteScrollingLogosAnimation";
import { desLogos } from "@/constants/skills";
import React from "react";

export default function () {
  return (
    <section
      id="skills"
      className={"sm:min-h-screen w-[95%] max-w-8xl mx-auto mt-30 relative"}
    >
      <div className="w-full flex flex-col items-end ">
        <h2 className="text-[#FFE9D0]  text-5xl md:text-6xl lg:text-8xl font-medium sm:mb-10 mb-8 tracking-tighter">
          Skills & Tools
        </h2>
      </div>
      <div className="text-center w-full sm:mt-4 sm:mb-10 mb-8 ">
        <h2 className="text-[#FFE9D0]  font-light sm:text-2xl text-xl">
          Programming & Development
        </h2>
        <InfiniteScrollingLogosAnimation />
      </div>
      <div className="text-center w-full sm:mt-4 ">
        <h2 className="text-[#FFE9D0] font-light sm:text-2xl text-xl">
          UI/UX & Design
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:mt-16 md:mt-10 mt-8">
          {desLogos.map((elmt, idx) => (
            <div key={idx} className=" bg-black cursor-pointer">
              <img
                src={elmt.icon}
                name={elmt.name}
                className="sm:h-22 h-14 w-auto flex-none hover:mix-blend-luminosity mix-blend-normal "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
