import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
import {Carousel} from 'react-bootstrap'

type Props = {
    experiences: Experience[]
}

export default function ExperienceComponent({experiences}: Props) {
    return (
        <div className="sectionContainer relative md:flex-row max-w-full mx-auto md:justify-center">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="sectionHeading"
            >
                Experience
            </motion.h3>
            <Carousel className="w-screen h-screen py-10">
                {experiences
                    .sort(
                        (a, b) =>
                            new Date(b.dateStarted).getTime() -
                            new Date(a.dateStarted).getTime(),
                    )
                    .map((experience) => (
                        <Carousel.Item
                            key={experience._id}
                            className="md:p-20 p-4 mt-24 md:mt-16"
                        >
                            <ExperienceCard experience={experience} />
                        </Carousel.Item>
                    ))}
            </Carousel>
        </div>
    )
}
