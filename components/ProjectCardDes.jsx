"use client";
import React from "react";
import { motion } from "framer-motion";
import { images } from "@/constants/images";
import Image from "next/image";

const ProjectCardDes = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0,y: 100 }}
      whileInView={{ opacity: 1 ,y: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="group relative bg-gradient-to-b from-white/20 to-black-1  h-full pb-3 rounded-t-xl overflow-hidden"
    >
      <div className="bg-white relative">
        <Image
          width={1920}
          height={1080}
          quality={90}
          placeholder="empty"
          src={project.image}
          alt={project.title}
          className="rounded-2xl border-4  border-white hover:mix-blend-luminosity mix-blend-normal   aspect-video w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col gap-4 justify-between px-4   ">
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="sm:text-2xl text-lg font-semibold ">
            {project.title}
          </h3>
          <p className="sm:text-[0.8rem] text-[0.6rem] text-white/50 font-light ">
            {project.description}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`backdrop-blur-sm text-white px-2 py-1 rounded-full sm:text-xs text-[0.5rem] hover:text-white hover:bg-black  ${
                  idx % 2 === 0 ? "bg-white/40" : "bg-white/20"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardDes;
