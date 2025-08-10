"use client";
import React from "react";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

const ProjectCardDes = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1,  filter: "blur(0px)" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true ,amount: 0.2 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className="group relative bg-gradient-to-b from-white/20 to-black-1 backdrop-blur-sm h-full pb-3 rounded-t-xl overflow-hidden"
    >
      <div className="bg-white ">
        <img
          src={
            project.image ||
            "https://images.unsplash.com/photo-1754404053324-8f910c2b7e2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={project.title}
          className="rounded-2xl border-4  border-white hover:mix-blend-luminosity mix-blend-normal   aspect-video w-full object-cover"
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
