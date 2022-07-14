import React from 'react'
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import "./Project.scss";

import ProjectData from './ProjectData'
import Contact from '../Contact/Contact';
function Projects() {
   return (
      <>
         <h2 className="head-text">
            <span> Portfolio Section </span>
         </h2>
         <span style={{color:'#98C942'}}> Software Developer Trainee</span>

         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin:'20px' }}>
         <img class="avatar rounded-2 avatar-user" src="https://avatars.githubusercontent.com/u/105354639?s=400&amp;u=fe215dc0ee8714a2eadc24f501e1e29a158b8bc5&amp;v=4" size= "48" width="48" height="48" alt="@CharlesMotsisi"/>
            <h2 style={{margin:'5px'}}>
               Charles Motsisi
            </h2>

         </div>
         
        <Contact/>
        

         <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
         >
            {ProjectData.map((work, index) => (
               <div className="app__work-item app-flex" key={index}>
                  <div className="app__work-img app-flex">
                     <img src={work.imageUrl} alt="work"></img>
                     <motion.div
                        className="app__work-hover app-flex"
                        whileHover={{ opacity: [1, 1] }}
                        transition={{
                           duration: 0.25,
                           ease: " easeInOut",
                           staggerChildren: 0.5,
                        }}
                     >
                        <a
                           href={work.projectLink}
                           target="blank"
                           rel="noreferrer"
                        >
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.4] }}
                              transition={{ duration: 0.25 }}
                              className="app__flex"
                           >
                              <AiFillEye />
                           </motion.div>
                        </a>
                        <a href={work.codeLink} target="blank" rel="noreferrer">
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.4] }}
                              transition={{ duration: 0.25 }}
                              className="app__flex"
                           >
                              <AiFillGithub />
                           </motion.div>
                        </a>
                     </motion.div>
                  </div>
                  <div className="app__work-content app__flex">
                     <h4 className="bold-text">{work.title}</h4>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {work.description}
                     </p>
                     <div className="app__work-tag app__flex">
                        <p className="p-text">{work.tag} </p>
                     </div>
                  </div>
               </div>
            ))}
         </motion.div>
      </>
   )
}

export default Projects
