"use client";
import React from 'react'
import { achievements } from '../utils/data'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => import ("react-animated-numbers"), {ssr: false});

const Achievements = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 xl:px-16 sm:py-16">
        <div className="md:border-[#33353F] md:border rounded-md py-8 px-16 flex flex-col gap-7 md:flex-row md:gap-0 items-center justify-between">
            {achievements.map((achievement, index) => {
                return (
                    <div key={index} className="flex flex-col gap-2 items-center justify-center mx-4">
                        <h2 className="text-white text-4xl font-bold flex flex-row">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-white "
                                configs={((_, index) => {
                                    return {
                                        mass: 1,
                                        friction: 100,
                                        tensions: 140 * (index + 1)
                                    }
                                })}
                            />
                            {achievement.postfix}
                        </h2>
                        <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Achievements