"use client";
import Header from "@/components/Header";
import SeeMyWork from "@/components/SeeMyWork";
import { images } from "@/constants/images";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full h-full relative  overflow-hidden " id="hero">
      <motion.img
        src={images.hero}
        alt="Hero Background"
        className="absolute inset-0 sm:w-full h-full object-cover -z-0"
        initial={{ filter: "blur(0px)", y: "-70%" }}
        animate={{
          y: "0%",
          filter: [
            "blur(0px) brightness(100%)",
            "blur(70px) brightness(120%)",
            "blur(0px) brightness(100%)",
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          filter: {
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      />
      <header className="sm:min-h-screen w-[95%] max-w-8xl mx-auto relative  ">
        <Header />
        <section className="w-full flex flex-col items-center justify-center sm:gap-8 gap-4 text-center">
          <motion.div
            className="flex gap-4 bg-white/6 backdrop-blur-[7px] w-fit items-center sm:px-8 sm:py-3 px-4 py-2 rounded-full relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
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
            <motion.div
              className="sm:h-5 sm:w-5 w-3 h-3 bg-[#FFE9D0] rounded-full"
              whileInView={{
                scale: [1, 1.1, 1],
                opacity: [1, 0.85, 1],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
            <p className="text-[0.6rem] sm:text-lg font-light">
              Software Engineering Student at ENSA Agadir
            </p>
          </motion.div>
          <div className="flex flex-col items-center justify-center sm:gap-4 gap-2">
            <motion.h1 className="lg:text-8xl md:text-6xl text-4xl font-semibold">
              <motion.span
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 }}
              >
                Developer <span className="font-light">and</span>
                <br />
              </motion.span>
              <motion.span
                className="font-['Times_New_Roman'] italic font-bold text-[#FFE9D0]"
                initial={{ opacity: 0, scale: 1.2, filter: "blur(15px)" }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  textShadow: [
                    "0px 0px 0px rgba(255,233,208,0)",
                    "0px 0px 30px rgba(255,233,208,0.7)",
                    "0px 0px 0px rgba(255,233,208,0)",
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 1,
                  textShadow: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 3,
                    delay: 1,
                  },
                }}
              >
                Graphic Designer
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
              className="sm:text-lg text-sm font-light"
            >
              Where Vision Becomes Logic
            </motion.p>
          </div>
          <SeeMyWork />
        </section>
      </header>
    </div>
  );
}
