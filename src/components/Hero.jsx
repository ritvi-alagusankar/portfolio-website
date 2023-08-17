import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <div><section id = "hero" className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto`}
        >
          <div className = "wrapper">
            <h1 className={`${styles.heroHeadText}  text-white text-center`}>
            Hi I'm <span className='text-[#61FABE]'>Ritvi</span>
            </h1>
            <div className='mt-5'>
            <p className={`${styles.heroSubText} line__1 mt-4 text-white-100 text-center`}>
              I am an aspiring software engineer
            </p>
            <p className={`${styles.heroSubText} line__2 mt-1 text-white-100 text-center`}>
              with a keen interest in <span className='text:[#61FABE]'>machine learning</span>
            </p>
            </div>
            
          </div>
        </div>
      </section></div>
      )
};

export default Hero