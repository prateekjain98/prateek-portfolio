import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
    experiences: Experience[]
}

export default function ExperienceComponent({experiences}: Props) {
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
            <div className="w-full h-[90vh] flex items-center space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory customScrollbar">
                {experiences
                    .sort(
                        (a, b) =>
                            new Date(b.dateStarted).getTime() - new Date(a.dateStarted).getTime(),
                    )
                    .map((experience) => (
                        <ExperienceCard
                            key={experience._id}
                            experience={experience}
                        />
                    ))}
                {/* <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard /> */}
            </div>
        </div>
    )
}
