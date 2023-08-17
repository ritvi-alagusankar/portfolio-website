import React from 'react';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const About = () => {
  return (
    
    <div ><section id = "about"  className={`relative w-full h-screen mx-auto items-center`}>
      <div class ="absolute inset-0 top-[150px]  max-w-7xl mx-auto">
      <div>
        <h1 className={`${styles.heroHeadText} ml-10 text-white text-center mt-10`}> About <span className='text-[#61FABE]'>Me</span> </h1>
        <p className={`${styles.heroSubText} ml-10 py-7 mr-6 text-white mt-10`}>
        A driven Electrical and Electronics Engineering student at Nanyang Technological University with a strong foundation in Computing and Data Analytics.
         Eager to apply academic prowess to real-world challenges. Proficient in Python, Java, SQL, Machine Learning, and Front-end development.
        </p>
      </div>
    </div>
  </section></div>
  );
}

export default About;