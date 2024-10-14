import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiPinescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { CiCloudOn } from "react-icons/ci";
import { FaNode } from "react-icons/fa";
import { motion } from "framer-motion";

const icons = (duration) => ({
  initial:{y:10},
  animate:{ y:[10,-10],
      transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
      }
  
  },
});
const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-blue-200 via-slate-400 to-purple-700 bg-clip-text tracking-tight text-transparent"> Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={icons(1)}
                initial="initial"
                animate="animate" 
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-600"/>
                </motion.div>

                <motion.div
                 variants={icons(6.5)}
                 initial="initial"
                 animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-400"/>
                </motion.div>

                <motion.div
                 variants={icons(1.5)}
                 initial="initial"
                 animate="animate"
                  className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-white"/>
                </motion.div>

                <motion.div
                 variants={icons(6)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGit className="text-7xl text-orange-700"/>
                </motion.div>

                <motion.div
                 variants={icons(2)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaReact className="text-7xl text-cyan-400"/>
                </motion.div>

                <motion.div
                 variants={icons(5.5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaLinux className="text-7xl text-white"/>
                </motion.div>

                <motion.div
                 variants={icons(2.5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPinescript className="text-7xl text-green-700"/>
                </motion.div>

                <motion.div
                 variants={icons(5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>

                <motion.div
                 variants={icons(3)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-300"/>
                </motion.div>

                <motion.div
                 variants={icons(4.5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDatabase className="text-7xl text-white"/>
                </motion.div>

                <motion.div
                 variants={icons(3.5)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <CiCloudOn className="text-7xl text-white"/>
                </motion.div>

                <motion.div
                 variants={icons(4)}
                 initial="initial"
                 animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-500"/>
                </motion.div>
        
                </div>
            </div>
  )
}

export default Technology
