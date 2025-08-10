"use client";
import { motion } from "framer-motion";
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
        <motion.h2 className="text-[#FFE9D0] text-5xl md:text-6xl lg:text-8xl font-medium sm:mb-10 mb-8 tracking-tighter">
          {/* Animation par lettre */}
          <motion.div
            initial={{ overflow: "hidden" }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="overflow-visible px-2"
          >
            {"Skills & Tools".split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{
                  y: 100,
                  opacity: 0,
                  filter: "blur(8px)",
                  rotateX: "45deg",
                }}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    rotateX: "0deg",
                    transition: {
                      duration: 0.8,
                      delay: 0.05 * index,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  color: "#ffffff",
                  textShadow: "0px 0px 8px rgba(255,233,208,0.7)",
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.h2>
      </div>
      <div className="text-center w-full sm:mt-4 sm:mb-10 mb-8 ">
        <motion.h2
          initial={{
            y: 100,
            opacity: 0,
            filter: "blur(8px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[#FFE9D0]  font-light sm:text-2xl text-xl"
        >
          Programming & Development
        </motion.h2>
        <InfiniteScrollingLogosAnimation />
      </div>
      <div className="text-center w-full sm:mt-4 ">
        <motion.h2
          initial={{
            opacity: 0,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[#FFE9D0] font-light sm:text-2xl text-xl"
        >
          UI/UX & Design
        </motion.h2>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(8px)",
          }}
          whileInView={{
     
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap justify-center items-center gap-8 lg:mt-16 md:mt-10 mt-8"
        >
          {desLogos.map((elmt, idx) => (
            <div key={idx} className=" bg-black cursor-pointer">
              <img
                src={elmt.icon}
                name={elmt.name}
                className="sm:h-22 h-14 w-auto flex-none hover:mix-blend-luminosity mix-blend-normal "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
