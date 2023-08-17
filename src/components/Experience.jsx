import React, { useState } from 'react'

import {
  Continental,
  car,
  spotify,
  ureca,
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
} from "../assets";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";
const ProjectCard = ({ project }) => {return (
  <VerticalTimelineElement 
  contentStyle={{
    boxShadow: 'none',
    background: "#050816",
    color: "#ffffff",
  }}
  contentArrowStyle={{ borderRight: "7px solid  white" }}
  date={project.date}
  iconStyle={{ background: project.iconBg }}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img
        src={project.icon}
        alt={project.company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>
  }
>
  <div>
    <h3 className='text-[#61FABE] text-[24px] font-bold'>{project.title}</h3>
    <h4
      className='text-white text-[20px] font-semibold'
      style={{ margin: 0}}
    >
      {project.company_name}
    </h4>
  </div>

  <ul className='mt-5 list-disc ml-5 space-y-2'>
    {project.points.map((point, index) => (
      <li
        key={`experience-point-${index}`}
        className='text-white-100 text-[16px] pl-1 tracking-wider'
      >
        {point}
      </li>
    ))}
  </ul>
</VerticalTimelineElement>
);
};
const ExperienceCard = ({ experience }) => {return (
  <VerticalTimelineElement 
    contentStyle={{
      boxShadow: 'none',
      background: "#050816",
      color: "#ffffff",
    }}
    contentArrowStyle={{ borderRight: "7px solid  white" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-[#61FABE] text-[24px] font-bold'>{experience.title}</h3>
      <h4
        className='text-white text-[20px] font-semibold'
        style={{ margin: 0}}
      >
        {experience.company_name}
      </h4>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[16px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
};
const Experience = () => {
  const [toggle, setToggle] = useState(1)
  function updateToggle(id)
  {
    setToggle(id)
  }
  return (
    <div ><section id = "work"  className={`relative w-full h-full mx-auto items-center`}>
    <div class ="top-[150px] max-w-7xl mx-auto pb-[150px]">
    <motion.div id = "work" variants={textVariant()}>
        <h2 className={`${styles.heroHeadText} pt-[150px] text-center text-white mb-14`}>
          Experience
        </h2>
      </motion.div>
      <div className='nv'>
        <a href="#Experience" style={{color: toggle == 1 ? '#61FABE' : 'white'}} onClick= {() => updateToggle(1)} class = {`${styles.sectionHeadText} eff text-white`}>Work</a>
        <a href="#Projects"  style={{color: toggle == 2 ? '#61FABE' : 'white'}} onClick= {() => updateToggle(2)} class = {`${styles.sectionHeadText} eff text-white`} >Projects</a>
        <a href="#Skills" style={{color: toggle == 3 ? '#61FABE' : 'white'}} onClick= {() => updateToggle(3)} class = {`${styles.sectionHeadText} eff text-white`}>Skills</a>
    </div>
      <div id = "exp" style={{display: toggle == 1 ? 'block' : 'none'}} class='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div id = "pro" style={{display: toggle == 2 ? 'block' : 'none'}}class='mt-20 flex flex-col'>
        <VerticalTimeline >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div id = "pro" style={{display: toggle == 3 ? 'block' : 'none'}}class='mt-20 flex justify-center items-center w-full h-full'>
      <div className='nv'><img
          src={javascript}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={html}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={css}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={reactjs}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={python}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={java}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        </div>
        <div className='nv'>
        <img
          src={C}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={r}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={sql}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={tensorflow}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={pandas}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        <img
          src={sk}
          className='w-[60%] h-[60%] image object-contain fitcircle'
        />
        

        </div>
        
        </div>
        </div>
        </section></div >
  )
}



export default Experience