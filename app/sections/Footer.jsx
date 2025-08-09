"use client";

import { images } from "@/constants/images";
import { easeInOut, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [text, setText] = useState("");
  const fullText = `All rights reserved. © Copyright Zakaria Ahrbil ${new Date().getFullYear()}.`;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, 50); // Speed of typewriter

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },

  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { easeInOut, stiffness: 260, damping: 20 },
    },
    hover: {
      scale: 1.2,

      transition: { duration: 0.3 },
    },
  };

  // Blinking cursor animation
  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };

  return (
    <motion.footer
      className="w-full bg-gradient-to-b from-black  to-[#FFE9D0]/20 text-white py-10 max-sm:mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <Link href={"#hero"} className="flex items-center justify-center">
            <motion.img
              src="/logo.svg"
              alt="Zalmoxis Logo"
              className="h-18 md:h-24"
              whileHover={{ scale: 1.05 }}
              transition={{ ease: "easeInOut", stiffness: 300 }}
            />
          </Link>
        </motion.div>

        {/* Social Media Links */}
        <motion.div className="flex items-center gap-5" variants={itemVariants}>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialIconVariants}
            whileHover="hover"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={images.instagram} alt="Instagram" className="h-8 w-8" />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialIconVariants}
            whileHover="hover"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={images.linkedin} alt="LinkedIn" className="h-8 w-8" />
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={socialIconVariants}
            whileHover="hover"
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={images.github} alt="GitHub" className="h-8 w-8" />
          </motion.a>
        </motion.div>

        {/* Copyright with Typewriter Effect */}
        <motion.div
        viewport={{ once: true , amount: 0.5 }}
          className="text-[#FFE9D0] sm:text-lg text-md tracking-wide font-light text-center max-w-[70%] flex"
          variants={itemVariants}
        >
          <span>{text}</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
