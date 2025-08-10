"use client";
import { posters } from "@/constants/posters";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const VerticalColumn = ({
  startIndex = 0,
  reverse = false,
  duration = 100,
  className = "",
  setPoster,
  setIsModalOpen,
}) => {
  // Create a rotated array of posters based on startIndex for variety
  const rotatedPosters = [
    ...posters.slice(startIndex),
    ...posters.slice(0, startIndex),
  ];

  // Create a fully duplicated array for perfect looping
  // We duplicate the entire array multiple times to ensure the animation is seamless
  const displayPosters = [
    ...rotatedPosters,
    ...rotatedPosters,
    ...rotatedPosters,
  ];

  return (
    <div className={`md:w-[25%] w-[30%] h-full overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y: reverse ? "0%" : `-${50}%`,
        }}
        initial={{
          y: reverse ? `-${50}%` : "0%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        }}
      >
        {displayPosters.map((poster, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/5]   "
            onClick={() => {
              setPoster(poster);
              setIsModalOpen(true);
            }}
          >
            <Image
              src={poster}
              alt={`Poster ${index}`}
              fill
              sizes="25vw"
              priority={index < 4}
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="rounded-md cursor-pointer "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function VerticalAnimatedPosters({ setPoster, setIsModalOpen }) {
  return (
    <motion.div
        initial={{ opacity: 0,  filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3}}
    
    className="flex gap-[2vw] justify-center overflow-hidden w-full h-[70vh] sm:h-[80vh] mt-12">
      <VerticalColumn
        startIndex={0}
        duration={190}
        setPoster={setPoster}
        setIsModalOpen={setIsModalOpen}
      />
      <VerticalColumn
        startIndex={Math.floor(posters.length / 4)}
        reverse={true}
        duration={190}
        setPoster={setPoster}
        setIsModalOpen={setIsModalOpen}
      />
      <VerticalColumn
        className="   "
        startIndex={Math.floor(posters.length / 2)}
        duration={190}
        setPoster={setPoster}
        setIsModalOpen={setIsModalOpen}
      />
      <VerticalColumn
        className="hidden lg:block  "
        startIndex={Math.floor((3 * posters.length) / 4)}
        reverse={true}
        duration={190}
        setPoster={setPoster}
        setIsModalOpen={setIsModalOpen}
      />
    </motion.div>
  );
}
