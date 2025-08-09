"use client";
import { images } from "@/constants/images";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Education = () => {
  const [bgOpacity, setBgOpacity] = useState(0);

  const educationData = [
    {
      degree: "Software Engineering",
      institution: "National School of Applied Sciences",
      period: "2023 - 2026",
      location: "Agadir",
    },
    {
      degree: "Preparatory Cycle",
      institution: "National School of Applied Sciences",
      period: "2021 - 2023",
      location: "Agadir",
    },
    {
      degree: "Electrical & Mechanical Engineering",
      institution: "Faculty of Science and Technology",
      period: "2020 - 2021",
      location: "Tanger",
    },
    {
      degree: "Baccalaureate in Mechanical Science and Technology",
      institution: "Ibn Soulaimane Rasmouki High School",
      period: "2018 - 2020",
      location: "Tiznit",
    },
  ];

  return (
    <section
      id="education"
      className={"sm:min-h-screen w-[95%] max-w-8xl mx-auto mt-30 relative"}
    >
      <div className="w-full flex flex-col items-center">
        <motion.h2 className="text-[#FFE9D0] text-5xl md:text-6xl lg:text-8xl font-medium mb-16 tracking-tighter">
          {/* Animation par lettre */}
          <motion.div
            initial={{ overflow: "hidden" }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="overflow-visible px-2"
          >
            {"Education".split("").map((char, index) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-y-16 gap-y-8 px-4">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: index * 0.1,
                },
              }}
              viewport={{ once: true }}
            >
              <div className="relative mb-2 w-fit overflow-hidden">
                <motion.div
                  className="bg-white text-black px-2 py-1 w-fit"
                  initial={{ x: "-100%" }}
                  whileInView={{
                    x: 0,
                    transition: {
                      duration: 0.9,
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium sm:text-lg">{item.degree}</span>
                </motion.div>
              </div>
              <motion.h3
                className="text-md font-light"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.8, delay: 0.6 + index * 0.1 },
                }}
                viewport={{ once: true }}
              >
                {item.institution}
              </motion.h3>
              <motion.p
                className="text-sm sm:font-light opacity-80"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 0.8,
                  transition: { duration: 0.8, delay: 0.6 + index * 0.1 },
                }}
                viewport={{ once: true }}
              >
                {item.period} | {item.location}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
        }}
        onAnimationComplete={() => {
          // Start the background opacity animation after the container animation completes
          setTimeout(() => {
            // Animate the opacity from 0 to 1 smoothly
            const interval = setInterval(() => {
              setBgOpacity((prev) => {
                const newOpacity = Math.min(prev + 0.05, 1);
                if (newOpacity >= 1) clearInterval(interval);
                return newOpacity;
              });
            }, 30); // Update every 30ms for a smooth transition
          }, 150);
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full mt-16 p-[0.09rem] bg-black md:rounded-full rounded-2xl"
      >
        <div className="relative w-full h-full py-12 px-4 flex flex-col sm:gap-6 gap-4 text-center items-center justify-center overflow-hidden md:rounded-full rounded-2xl">
          {/* Background overlay with animation */}
          <div
            className="bgnova absolute inset-0 md:rounded-full rounded-2xl"
            style={{ opacity: bgOpacity, transition: "opacity 1s ease-out" }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 ,ease: "easeInOut"}}
              className="sm:text-4xl text-xl tracking-wide font-semibold"
            >
              I solve problems and build things that work.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 ,ease: "easeInOut"}}
              className="sm:text-md text-sm font-light max-w-2xl"
            >
              Each project is a step forward in my journey as a developer and
              graphic designer. From concept to creation, I focus on creating
              meaningful solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6,ease: "easeInOut" }}
              whileHover={{ y: -4, x: 4 }}
            >
              <Link
                href={"#contact"}
                className="flex gap-4 items-center justify-center sm:px-8 sm:py-3 px-6 py-2 bg-white/6 backdrop-blur-[32px] border-zinc-500/70 border rounded-full w-fit"
              >
                <p className="sm:text-2xl text-md leading-none">Contact-me</p>
                <img src={images.contact} className="sm:h-8 sm:w-8 h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
