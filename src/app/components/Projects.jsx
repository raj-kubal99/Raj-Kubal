"use client"
import React, { useContext, useEffect, useState, useRef } from 'react'
import { PROJECT_DATA as projectData } from '../utils/data'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { ScrollContext } from '../context/ScrollContext'
import { motion, useInView } from 'framer-motion'

const Projects = () => {
  const [tag, setTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const { projectRef } = useContext(ScrollContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (tag) => {
    setTag(tag);
  }

  // this can also be done directly
//   const filteredProjects = projectData.filter((project) => {
//     return project.tags.includes(tag);
//   });

  useEffect(() => {
    setFilteredProjects(projectData.filter((project) => {
        return project.tags.includes(tag);
    }))
  }, [tag])

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  }

  return (
    <section ref={projectRef} className='py-8 sm:py-16'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>My Projects</h2>

        <div className='text-white flex flex-row flex-wrap justify-center items-center gap-2 py-8'>
            <ProjectTag name="All" onClick={() => {handleTagChange("All")}} isSelected={tag === "All"} />
            <ProjectTag name="Frontend" onClick={() => {handleTagChange("Frontend")}} isSelected={tag === "Frontend"} />
            <ProjectTag name="Backend" onClick={() => {handleTagChange("Backend")}} isSelected={tag === "Backend"} />
            <ProjectTag name="Fullstack" onClick={() => {handleTagChange("Fullstack")}} isSelected={tag === "Fullstack"} />
        </div>

        {console.log(filteredProjects.length)}

        {filteredProjects.length === 0 ? <h2 className='text-white text-xl font-bold text-center'>Sorry, no projects yet. Will develop soon :D</h2> :
          <ul ref={ref} className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
              {filteredProjects.map((project, index) => (
                <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  <ProjectCard 
                      key={project.id} 
                      title={project.title} 
                      description={project.description} 
                      imgUrl={project.image}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                  />
                </motion.li>
              ))}
          </ul>
        }
    </section>
  )
}

export default Projects