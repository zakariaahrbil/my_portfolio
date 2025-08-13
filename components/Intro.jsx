"use client";
import { motion } from "framer-motion";

export default function Intro({children}) {

    const anim = (variants) => {
        return{
            initial:"initial",
            animate:"animate",
            exit:"exit",
            variants
        }
    }

    const opacity = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 4 } },
      exit: { opacity: 0, transition: { duration: 4 } },
    };


  return (
    <motion.div {...anim(opacity)} className=''>
        {children}
    </motion.div>
  )
}
