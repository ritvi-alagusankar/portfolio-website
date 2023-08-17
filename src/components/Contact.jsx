import React from 'react'
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import {
  linkedin,
  resume,
  outlook,
  java,
  r,
  C,
  pandas,
  sk,
  python,
  tensorflow,
  sql,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  ey,
  indium,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ventrx,
  github,
} from "../assets";
const Contact = () => {
  return (
    <div><section id = "contact"  className={`relative w-full h-full mx-auto items-center`}>
    <div class ="top-[0px] max-w-7xl mx-auto">
    <motion.div id = "contact" variants={textVariant()}>
        <h2 className={`${styles.heroHeadText} pt-[0px] text-center text-white mb-14`}>
          Contact
        </h2>
      </motion.div>
      <div className='nv'>
        <a target='_blank' href = 'https://www.linkedin.com/in/ritvi-alagusankar-456900229/'>
          <img src={linkedin}
          className='w-[60%] h-[60%] mt-[5px] image object-contain fitcircle'
        /><p className='text-center text-white text-[14px] font-medium mt-1 '>LinkedIn</p></a>
        <a target='_blank' className={`text-center text-white text-[14px] font-medium`} href = 'https://github.com/Ritzzer764'>
          <img src={github}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        /><p className='text-center text-white text-[14px] font-medium mt-1 '>Github</p></a>
        <a className={`text-center text-white text-[14px] font-medium`} href = 'mailto:RITVI001@e.ntu.edu.sg'>
          <img src={outlook}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />Mail</a>
        <a target='_blank' className={`text-center text-white text-[14px] font-medium`} href='src/Ritvi Alagusankar.pdf'><img
          src={resume}
          className='w-[60%] h-[60%] mt-1 image object-contain fitcircle'
        /><p className='text-center text-white text-[14.75px] mb-1 font-medium'>Resume</p></a></div>
      </div></section>
      </div>
  )
}

export default Contact