"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Dev = () => {
  return (
    <section
      id="development"
      className="sm:min-h-screen w-[95%] max-w-8xl mx-auto mt-30 relative "
    >
        <AnimatedBackground/>
      <div className="w-full flex flex-col sm:gap-4 gap-2 mb-8 sm:mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium  tracking-tighter">
          Development
        </h2>
        <p className="text-sm sm:text-lg font-light pl-1 text-white/70 max-w-md">
          Crafting digital experiences through code and creativity
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full px-8">
        {projects.map((project, id) => (
          <ProjectCard project={project} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Dev;
