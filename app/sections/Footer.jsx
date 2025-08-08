"use client";

import { images } from "@/constants/images";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 max-sm:mt-16">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <Link href={"#hero"} className="flex items-center justify-center"> 
          <img src="/logo.svg" alt="Zalmoxis Logo" className="h-18 md:h-24" />
        </Link>

        {/* Social Media Links */}
        <div className="flex items-center gap-5">
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={images.instagram} alt="Instagram" className="h-8 w-8" />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={images.linkedin} alt="LinkedIn" className="h-8 w-8" />
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={images.github} alt="GitHub" className="h-8 w-8" />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="sm:text-lg text-md tracking-wide font-light text-center max-w-[70%] ">
          All rights reserved. © Copyright Zakaria Ahrbil{" "}
          {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
