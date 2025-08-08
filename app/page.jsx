"use client";
import Hero from "./sections/Hero";
import Menu from "@/components/Menu";
import About from "./sections/About";
import Education from "./sections/Education";
import Dev from "./sections/Dev";
import { images } from "@/constants/images";
import Skills from "./sections/Skills";
import Des from "./sections/Des";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Posters from "./sections/Posters";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      smoothTouchDelay: 0.1,
      smoothWheelDelay: 0.1,
      duration: 1.1,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-black w-full relative">
      {/* <img
        src={images.grain}
        className="absolute inset-0 object-cover w-full h-full z-80 mix-blend-overlay opacity-70 pointer-events-none"
      />
      <Menu /> */}

      <main className="w-full relative overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Dev />
        <Des />
        <Posters />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
