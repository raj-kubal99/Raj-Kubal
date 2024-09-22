"use client"
import React, { useContext, useEffect, useState, useRef } from 'react'
import { workExperiences } from '../utils/data'
import { ScrollContext } from '../context/ScrollContext'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'


const ExperienceDetails = () => {
  const { experienceRef } = useContext(ScrollContext);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  }

  return (
    <>
    <section ref={experienceRef} className='py-8 sm:py-16'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>Experience</h2>

        <div ref={ref} className="space-y-4">
          {workExperiences.map((job, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
            <div key={index} className="border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <button
                onClick={() => handleToggle(index)}
                className="w-full bg-gray-800 text-left p-4 flex justify-between items-center hover:bg-gray-700 focus:outline-none"
              >
                <div style={{display:"flex"}}>
                  <div style={{justifyContent : "center"}}>
                    <Image src={job.logo} alt="company logo" width={50} height={50} />
                  </div>
                  <div style={{paddingLeft: "10px"}}>
                    <h3 className="text-xl font-semibold">{job.companyName}</h3>
                    <p className="text-gray-400">{job.date}</p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedIndex === index && (
                <div className="p-4 bg-gray-800">
                  {/* <ul className="list-disc list-inside space-y-2"> */}
                    {job.jobRole.map((roleDesc, roleIndex) => (
                      <div key={roleIndex} className="bg-gray-800 mb-4 p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{roleDesc.role}</h3>
                            <p className="text-gray-400">{roleDesc.type} | {roleDesc.period}</p>
                          </div>
                        </div>
                        <ul className="list-disc pl-5 text-gray-300">
                          {roleDesc.responsibilities.map((resp, respindex) => (
                            <li key={respindex} className="mb-2">{resp}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  {/* </ul> */}
                </div>
              )}
            </div>
            </motion.div>
          ))}
        </div> 


        

    </section>
    </>
  )
}

export default ExperienceDetails;