import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h1
    whileInView={{opacity: 1,y:0}}
    initial={{opacity: 0,y:-100}}
    transition={{duration: 0.5}}
     className="my-20 text-center text-4xl">Education</motion.h1>
    <div>
      {EDUCATIONS.map((EDUCATIONS, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
          whileInView={{opacity: 1,x:0}}
          initial={{opacity: 0,x:-100}}
          transition={{duration: 1}}
           className="w-full lg:w-1/4">
            <p className="mb-2 text-sm text-neutral-400">{EDUCATIONS.year}</p>
            <p className="mb-2 text-sm text-neutral-400">{EDUCATIONS.Degree}</p>
            <p className="mb-2 text-sm text-neutral-400">{EDUCATIONS.GPA}</p>
          </motion.div>
          
          <motion.div
          whileInView={{opacity: 1,x:0}}
          initial={{opacity: 0,x:100}}
          transition={{duration: 1}}
           className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semi-bold">
              {EDUCATIONS.college}{" "}
              <span className="text-sm font-extralight text-purple-400">
                {EDUCATIONS.University}
              </span>
            </h6>
            <p className="mb-4 text-neutral-400">{EDUCATIONS.description}</p>
            {EDUCATIONS.Knowledge.map((knowledge, index) => (
              <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500">{knowledge}</span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Education
