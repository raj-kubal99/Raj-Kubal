import React from 'react'
import { experiences } from '../utils/data'

const Experience = () => {
  return (
    <div className='flex flex-col gap-5'>
        {experiences.map((exp) => {
          return <div key={exp.id} className='flex flex-col gap-1'>
            <h3 className='font-semibold'>{exp.role}</h3>
            <p className='text-sm'>{exp.company}</p>
            <p className='text-sm text-[#ADB7BE]'>{exp.period}</p>
          </div>
        })}
    </div>
  )
}

export default Experience