"use client";
import React from "react";
import { motion } from "framer-motion";
import { images } from "@/constants/images";
import Image from "next/image";

const ProjectCard = ({ project, index }) => {
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
      <div className="bg-white relative ">
        <Image
          width={1920}
          height={1080}
          quality={90}
          placeholder="empty"
          src={project.image}
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
          <div className="flex gap-2 mt-2 mb-2">
            <a
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-[0.06rem] bg-gradient-to-b from-[#ffffff] to-[#2D2D2D] rounded-full flex items-center justify-center ${
                project.liveUrl
                  ? "opacity-100 cursor-pointer"
                  : "opacity-40 pointer-events-none"
              }`}
              tabIndex={project.liveUrl ? 0 : -1}
              aria-disabled={!project.liveUrl}
            >
              <div className="px-3 py-2 bg-[#191919] rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 hover:bg-[#252525]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 5V3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M19 13H21"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 21V23"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 13H5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Live Demo
              </div>
            </a>
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-[0.06rem] bg-gradient-to-b from-[#ffffff] to-[#2D2D2D] rounded-full flex items-center justify-center ${
                project.githubUrl
                  ? "opacity-100 cursor-pointer"
                  : "opacity-60 pointer-events-none"
              }`}
              tabIndex={project.githubUrl ? 0 : -1}
              aria-disabled={!project.githubUrl}
            >
              <div className="px-3 py-2 bg-[#191919] rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2 hover:bg-[#252525]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 8.839 21.489C9.339 21.579 9.5 21.279 9.5 21.019C9.5 20.789 9.5 20.139 9.5 19.299C6.8 19.859 6.2 17.959 6.2 17.959C5.74 16.839 5.067 16.539 5.067 16.539C4.134 15.959 5.134 15.979 5.134 15.979C6.154 16.049 6.688 16.959 6.688 16.959C7.6 18.459 9.074 18.009 9.54 17.759C9.634 17.159 9.894 16.719 10.174 16.459C8.034 16.199 5.782 15.359 5.782 11.599C5.782 10.519 6.172 9.629 6.708 8.959C6.614 8.709 6.244 7.669 6.808 6.309C6.808 6.309 7.668 6.049 9.508 7.229C10.308 7.019 11.128 6.909 11.948 6.909C12.768 6.909 13.588 7.019 14.388 7.229C16.228 6.049 17.088 6.309 17.088 6.309C17.652 7.669 17.282 8.709 17.188 8.959C17.724 9.629 18.114 10.519 18.114 11.599C18.114 15.369 15.852 16.189 13.702 16.449C14.062 16.769 14.382 17.399 14.382 18.359C14.382 19.719 14.372 20.689 14.372 21.009C14.372 21.269 14.532 21.579 15.042 21.479C19.016 20.156 21.881 16.419 21.881 12C21.881 6.477 17.404 2 11.881 2H12Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
