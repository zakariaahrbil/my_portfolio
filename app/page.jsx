"use client";
import Hero from "./sections/Hero";
import Menu from "@/components/Menu";
import About from "./sections/About";
import Education from "./sections/Education";
import Dev from "./sections/Dev";
import Skills from "./sections/Skills";
import Des from "./sections/Des";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState, useRef } from "react";
import Posters from "./sections/Posters";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  // Handle resize events and mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    // Initial check
    checkMobile();

    // Listen for resize events with throttling
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);


  useEffect(() => {
    // Don't initialize Lenis on mobile
    if (isMobile) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;

        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
      }
      return;
    }

    // Initialize Lenis on desktop
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 0,
        infinite: false,
        autoResize: true,
      });

      const raf = (time) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          rafIdRef.current = requestAnimationFrame(raf);
        }
      };

      rafIdRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isMobile]);

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-black w-full relative">
      <Menu />

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
