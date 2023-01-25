import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
}

export default function Skills({ skills }: Props) {
    return (
        <div className="sectionContainer relative items-center justify-center">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="sectionHeading"
            >
                Skills
            </motion.h3>
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-28 tracking-[3px] text-gray-500 text-sm"
            >
                Hover over a skill for proficiency
            </motion.h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="mt-20 grid grid-cols-4 w-[89vw] md:grid-cols-6 md:gap-3 max-h-[75vh] overflow-y-auto overflow-x-hidden customScrollbar"
            >
                {skills
                    .sort((a, b) => b.progress - a.progress)
                    .slice(0, skills.length / 2)
                    .map((skill) => (
                        <Skill key={skill._id} skill={skill} />
                    ))}
                {skills
                    .sort((a, b) => b.progress - a.progress)
                    .slice(skills.length / 2, skills.length)
                    .map((skill) => (
                        <Skill key={skill._id} skill={skill} directionLeft />
                    ))}
            </motion.div>
        </div>
    )
}
