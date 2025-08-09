import ImageModal from "@/components/ImageModel";
import VerticalAnimatedPosters from "@/components/VerticalAnimatedPosters";
import React from "react";
import { motion } from "framer-motion";
export default function () {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [poster, setPoster] = React.useState("");
  return (
    <section
      id="posters"
      className={"sm:min-h-screen w-[95%] max-w-8xl mx-auto mt-30 relative"}
    >
      <div className="w-full flex flex-col items-end ">
        <motion.h2 className="text-[#FFE9D0] text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter">
          {/* Animation par lettre */}
          <motion.div
            initial={{ overflow: "hidden" }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="overflow-visible px-2"
          >
            {"Posters".split("").map((char, index) => (
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
        <motion.p
          initial={{
            y: 100,
            opacity: 0,
            filter: "blur(8px)",
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-sm sm:text-lg font-light pl-1 text-white/70 max-w-md"
        >
          click to view the poster
        </motion.p>
      </div>
      <VerticalAnimatedPosters
        setPoster={setPoster}
        setIsModalOpen={setIsModalOpen}
      />
      <ImageModal
        isOpen={isModalOpen}
        src={poster}
        alt="Poster"
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
