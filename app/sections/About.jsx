"use client";
import React from "react";
import ImageModal from "@/components/ImageModel";
import { images } from "@/constants/images";
import Shape from "@/components/Shape";
import { motion } from "framer-motion";

const About = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const content = [
    {
      svg: images.svg1,
      text: "I ask why before I ask how. Curiosity drives every project I start — not just to build, but to understand, explore, and evolve ideas into something meaningful.",
    },
    {
      svg: images.svg2,
      text: "Patterns hide in plain sight. I seek clarity beyond complexity — transforming data, design, or code into systems that make sense and feel intuitive.",
    },
    {
      svg: images.svg3,
      text: "I don’t just ship — I shape. From the smallest detail to the overall experience, I care about quality and consistency. It’s not done until it’s done right.",
    },
    {
      svg: images.svg4,
      text: "Everything improves — including me. I treat every project as a chance to grow, experiment, and refine. Learning is constant, and transformation is the goal.",
    },
  ];

  return (
    <section
      id="about"
      className="sm:min-h-screen w-[95%] max-w-8xl mx-auto  max-sm:mt-30 "
    >
      <div className="container mx-auto">
        <div className="flex flex-row md:items-start items-center justify-between mb-16">
          <motion.h2 className="text-[#FFE9D0] text-5xl md:text-6xl lg:text-8xl font-medium mb-8 md:mb-0 tracking-tighter ">
            {/* Animation par lettre */}
            <motion.div
              initial={{ overflow: "hidden" }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="overflow-visible px-2"
            >
              {"About Me".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{
                    y: 100,
                    opacity: 0,
                    filter: "blur(8px)",
                    rotateX: "45deg",
                  }}
                  variants={{
                    visible: {
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      rotateX: "0deg",
                      transition: {
                        duration: 0.8,
                        delay: 0.05 * index,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  whileHover={{
                    color: "#ffffff",

                    textShadow: "0px 0px 8px rgba(255,233,208,0.7)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.h2>

          <motion.img
            initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,

              transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
            }}
            viewport={{ once: true }}
            src="/me.png"
            alt="Zakaria Ahrbil"
            onClick={() => setIsModalOpen(true)}
            className=" sm:h-48  h-20   cursor-pointer  rounded-md max-sm:rounded-full hover:opacity-90 transition-all hover:mix-blend-luminosity mix-blend-normal duration-500 ease-in-out"
          />

          <ImageModal
            isOpen={isModalOpen}
            src="/me.png"
            alt="Zakaria Ahrbil"
            onClose={() => setIsModalOpen(false)}
          />
        </div>
        <section className="w-full flex flex-col lg:flex-row items-center lg:justify-between">
          <motion.video
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeInOut", delay: 0.5 },
            }}
            viewport={{ once: true }}
            src="/eye.mp4"
            className="sm:max-w-xl w-full  "
            autoPlay
            muted
            loop
          />
          <motion.p
            className="text-sm md:text-2xl sm:max-w-2xl max-w-[80%] text-justify font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {`I'm Zakaria Ahrbil, a creative developer and designer studying Software Engineering. Through the myth of Zalmoxis, I channel code and design into tools of transformation — from digital experiences to intelligent systems.`
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.6,
                      delay: index * 0.03, // Stagger the words
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>
        </section>

        {/* What Shapes My Work Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,

              transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
            }}
            className="text-[#FFE9D0] text-2xl md:text-4xl font-light mb-8 mt-12 tracking-tighter"
          >
            What shapes my work
          </motion.h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl">
            {content.map((item, index) => (
              <Shape svg={item.svg} text={item.text} key={index} idx={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
