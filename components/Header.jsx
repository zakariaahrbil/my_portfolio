'use client';
import {motion} from 'framer-motion';


export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5,delay: 0.2 }}
      className="flex py-8 px-4 sm:justify-start justify-center sm:mb-6 mb-12 "
    >
      <img src="/logo.svg" alt="Logo" className="h-10 sm:h-12 " />
    </motion.div>
  );
}
