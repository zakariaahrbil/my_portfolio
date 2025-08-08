"use client";
import { images } from "@/constants/images";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Education = () => {
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
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium mb-16 tracking-tighter">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-y-16 gap-y-8 px-4">
          {educationData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-white text-black  px-2 py-1 mb-2 w-fit">
                <span className="font-medium sm:text-lg">{item.degree}</span>
              </div>
              <h3 className="text-md font-light">{item.institution}</h3>
              <p className="text-sm sm:font-light opacity-80">
                {item.period} | {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full    mt-16  p-[0.09rem] bg-gradient-to-r from-black to-white md:rounded-full rounded-2xl">
        <div className="bgnova w-full h-full py-12 px-4 flex flex-col sm:gap-6 gap-4 text-center items-center justify-center overflow-hidden md:rounded-full rounded-2xl">
          <p className="sm:text-4xl text-xl tracking-wide font-semibold">
            I solve problems and build things that work.
          </p>
          <p className="sm:text-md text-sm font-light max-w-2xl">
            Each project is a step forward in my journey as a developer and
            graphic designer. From concept to creation, I focus on creating
            meaningful solutions.
          </p>
          <motion.div
            whileHover={{ y: -4, x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={"#contact"}
              className="flex gap-4 items-center justify-center sm:px-8 sm:py-3 px-6 py-2 bg-white/6 backdrop-blur-[32px] border-zinc-500/70 border  rounded-full"
            >
              <p className="sm:text-2xl text-md leading-none">Contact-me</p>
              <img
                src={images.contact}
                className="sm:h-8 sm:w-8 h-6 w-6 "
              ></img>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
