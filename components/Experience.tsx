import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({}: Props) {
    return (
        <div className="sectionContainer relative md:flex-row max-w-full justify-end mx-auto md:items-end md:justify-center">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="sectionHeading"
            >
                Experience
            </motion.h3>
            <div className="w-full h-[85vh] flex items-center space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory customScrollbar">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
    )
}
