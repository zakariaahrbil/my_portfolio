import Image from "next/image";
import Hero from "./sections/Hero";
import Menu from "@/components/Menu";
import About from "./sections/About";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-black w-full">
      <main className="w-full relative">
        <Hero />
        <Menu />
        <About/>
        
      </main>
    </div>
  );
}
