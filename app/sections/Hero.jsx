'use client';
import Header from "@/components/Header";
import SeeMyWork from "@/components/SeeMyWork";
import { images } from "@/constants/images";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <motion.img
        src={images.hero}
        alt="Hero Background"
        className="absolute inset-0 sm:w-full h-full object-cover -z-0"
        initial={{ filter: "blur(0px)" }}
        animate={{
          filter: [
            "blur(0px) brightness(100%)",
            "blur(70px) brightness(120%)",
            "blur(0px) brightness(100%)",
          ],
        }}
        transition={{
          duration: 20,
          ease: "spring",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <header className="sm:min-h-screen w-[95%] max-w-8xl mx-auto relative">
        <Header />
        <section className="w-full flex flex-col items-center justify-center sm:gap-8 gap-4 text-center">
          <div className="flex gap-4 bg-white/6 backdrop-blur-[7px] w-fit items-center sm:px-8 sm:py-3 px-4 py-2 rounded-full relative overflow-hidden">
            <motion.img
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              src={images.light}
              className="absolute z-40 top-1/2 -translate-y-1/2 h-auto"
            />
            <div className="sm:h-5 sm:w-5 w-3 h-3  bg-white rounded-full"></div>
            <p className="text-[0.6rem] sm:text-lg font-light">
              Software Engineering Student at ENSA Agadir
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:gap-4 gap-2">
            <h1 className="lg:text-8xl md:text-6xl text-4xl font-semibold ">
              <span>
                Developer <span className="font-light">and</span>
                <br />
              </span>
              <span className="font-['Times_New_Roman'] italic font-bold">
                Graphic Designer
              </span>
            </h1>
            <p className="sm:text-lg text-sm font-light">
              Where Vision Becomes Logic
            </p>
          </div>
          <SeeMyWork />
        </section>
      </header>
    </div>
  );
}
