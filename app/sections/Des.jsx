"use client";
import React from "react";
import { projects } from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import { AnimatedBackground2 } from "@/components/AnimatedBackground2";

const Des = () => {
  return (
    <section
      id="design"
      className="sm:min-h-screen w-[95%] max-w-8xl mx-auto mt-30 relative "
    >
      <AnimatedBackground2 />
      <div className="w-full flex flex-col items-center sm:gap-4 gap-2 mb-8 sm:mb-16">
        <h2 className="text-[#FFE9D0] text-5xl md:text-6xl lg:text-8xl font-medium  tracking-tighter">
          Design
        </h2>
        <p className="text-sm sm:text-lg font-light pl-1 text-white/70 max-w-md text-center">
          Merging creativity with technology to create stunning visuals
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

export default Des;
