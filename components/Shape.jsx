"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Shape({ svg, text,idx }) {
  return (
    <motion.div
      className="max-w-lg bg-gradient-to-b from-white/20 to-black rounded-lg py-4 sm:px-6 px-2 space-y-4 sm:space-y-6 overflow-hidden"
      initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: "easeOut", delay: idx * 0.2+0.1},
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(255, 233, 208, 0.05)",

      }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={svg}
        className={`sm:w-24 sm:h-24 w-16 h-16`}
        alt="Shape"
        whileHover={{
          filter: "brightness(1.2)",
          transition: { duration: 0.2 },
        }}
      />
      <motion.p
        className="text-sm max-sm:text-[0.6rem] font-light max-w-[18rem]"
        initial={{ opacity: 0.8 }}
        whileHover={{
          opacity: 1,
          color: "#FFE9D0",
          transition: { duration: 0.2 },
        }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}
