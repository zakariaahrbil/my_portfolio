import Image from "next/image";
import Hero from "./sections/Hero";
import Menu from "@/components/Menu";
import About from "./sections/About";
import Education from "./sections/Education";
import { images } from "@/constants/images";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-black w-full relative">
      <img
        src={images.grain}
        className="absolute inset-0 object-cover w-full h-full z-80 mix-blend-overlay opacity-70 pointer-events-none"
      />
      <Menu />

      <main className="w-full  relative  overflow-x-hidden">
        <Hero />

        <About />
        <Education />
      </main>
    </div>
  );
}
