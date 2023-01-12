import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'
import { Skill as SkillType} from '../typings'
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
                    initial={{
                        x: directionLeft ? -100 : 100,
                        opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    src={urlFor(skill.image).url()}
                    className=" rounded-xl p-1 border border-gray-500 object-contain h-10 w-10 filter group-hover:grayscale transition duration-400 ease-in-out"
                />
                <p className="text-gray-500 text-sm">{skill.title}</p>
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-400 ease-in-out group-hover:bg-white h-10 w-10 rounded-xl z-0">
                    <div className="flex items-center justify-center h-full">
                        <p className="font-bold text-black opacity-100">
                            {skill.progress}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
