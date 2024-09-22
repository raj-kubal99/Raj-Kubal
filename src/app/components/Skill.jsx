import React from 'react'
import Image from 'next/image'

const Skill = ({ name, img }) => {
  return (
    <div className="flex justify-center items-center gap-2 bg-[#2a2c33] p-3 w-fit rounded-xl text-sm font-medium">
        <Image src={img} width={24} height={24} alt="skill-logo" />
        <h3>{name}</h3>
    </div>
  )
}

export default Skill