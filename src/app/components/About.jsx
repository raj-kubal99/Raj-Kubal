"use client";
import Image from 'next/image'
import { useContext, useState, useTransition } from 'react';
import TabButton from './TabButton';
import { TAB_DATA as tabData } from '../utils/data';
import { ScrollContext } from '../context/ScrollContext';
import Lottie from 'lottie-react';
import about from "../../../public/animations/about.json"

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { aboutRef } = useContext(ScrollContext);

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    })
  }

  return (
    <section className='text-white' ref={aboutRef}>
        <div className='flex flex-col lg:flex-row items-center gap-8 py-8 sm:py-16 xl:gap-16'>
            <Lottie animationData={about} width={100} height={100} alt="about-me" />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full' style={{width:"60%"}}>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                looking to expand my knowledge and skill set. I am a team player and
                I am excited to work with others to create amazing applications.
                </p>

                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => {handleTabChange("skills")}} active={tab === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={() => {handleTabChange("experience")}} active={tab === "experience"}>
                        Experience
                    </TabButton>
                    <TabButton selectTab={() => {handleTabChange("certifications")}} active={tab === "certifications"}>
                        Certifications
                    </TabButton>
                </div>

                <div className='mt-4 lg:mt-8'>
                    {tabData.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About