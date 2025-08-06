"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

export default function SeeMyWork() {
  return (
    <motion.div
      whileHover={{ y: -4, x: 4 }}
      transition={{ duration: 0.2 }}
      className="p-[0.06rem] bg-gradient-to-b from-[#ffffff] to-[#2D2D2D] rounded-full max-sm:mt-2 "
    >
      <Link href={"#projects"}>
        <div className="flex items-center justify-center sm:px-8 sm:py-4 px-4 py-2  bg-[#191919]  rounded-full sm:gap-4 gap-2">
          <p className=" font-light sm:text-2xl tracking-wider leading-none ">
            See <span className="font-bold">My Work</span>
          </p>
          <img src={images.eyeSee} className="w-16"></img>
        </div>
      </Link>
    </motion.div>
  );
}
