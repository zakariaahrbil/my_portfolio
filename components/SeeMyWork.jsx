"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

export default function SeeMyWork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.3,
        },
      }}
      whileHover={{ y: -4, x: 4, transition: { duration: 0.1 } }}
      className="p-[0.06rem] bg-gradient-to-b from-[#ffffff] to-[#2D2D2D] rounded-full max-sm:mt-2 "
    >
      <Link href={"#development"}>
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
