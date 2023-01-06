import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
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
                className="absolute top-32 tracking-[3px] text-gray-500 text-sm"
            >
                Hover over a skill for proficiency
            </motion.h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-3 md:grid-cols-4 gap-5"
            >
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </motion.div>
        </div>
    )
}
