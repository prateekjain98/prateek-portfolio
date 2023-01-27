import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'
import { Skill as SkillType } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    directionLeft?: boolean
    skill: SkillType
}

export default function Skill({ directionLeft, skill }: Props) {
    return (
        <div className="group relative flex cursor-pointer items-center justify-center">
            <div className="flex flex-col items-center">
                <motion.img
                    key={skill._id}
                    initial={{
                        x: directionLeft ? '-5vw' : '5vw',
                        opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    src={urlFor(skill.image).url()}
                    className=" rounded-xl p-1 border bg-white/10 border-gray-500 object-contain h-8 w-8 md:h-10 md:w-10 filter group-hover:grayscale transition duration-400 ease-in-out"
                />
                <div className="absolute opacity-[1%] group-hover:opacity-80 transition duration-400 ease-in-out group-hover:bg-white h-8 w-8 md:h-10 md:w-10 rounded-xl z-0">
                    <div className="flex items-center justify-center h-full">
                        <p className="m-0 text-xs md:text-sm font-bold text-black opacity-100">
                            {skill.progress}%
                        </p>
                    </div>
                </div>
                <p className="text-gray-500 text-xs">{skill.title}</p>
            </div>
        </div>
    )
}
