import Image from "next/image";
import Hero from "./sections/Hero";
import Menu from "@/components/Menu";
import About from "./sections/About";
import Education from "./sections/Education";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-black w-full">
      <main className="w-full relative overflow-x-hidden">
        <Hero />
        <Menu />
        <About/>
        <Education />
        
      </main>
    </div>
  );
}
