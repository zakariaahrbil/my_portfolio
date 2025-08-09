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
import { useEffect, useState } from "react";
import Posters from "./sections/Posters";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    // Only initialize Lenis if not on mobile
    if (!isMobile) {
      const lenis = new Lenis({
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 0,
        infinite: false,
        autoResize: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Cleanup
      return () => {
        window.removeEventListener("resize", checkMobile);
        lenis.destroy();
      };
    
    
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

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
