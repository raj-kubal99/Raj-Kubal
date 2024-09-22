import React from 'react'
import Skill from './Skill'
import { skills } from '../utils/data'

const Skills = () => {
  return (
    <div className='flex flex-wrap gap-3'>
      {skills.map((skill) => {
        return <Skill key={skill.id} name={skill.name} img={skill.img} />
      })}
    </div>
  )
}

export default Skills