import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex flex-col md:h-[65vh] h-[70vh] rounded-lg items-center justify-evenly flex-shrink-0 w-screen md:w-[70vw] snap-center bg-[#292929] p-5 md:hover:opacity-100 md:opacity-70 cursor-pointer transition-opacity duration-200">
            <motion.img
                initial={{
                    y: -10,
                    opacity: 0,
                }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="h-16 w-16 xl:h-[70px] xl:w-[70px] object-contain object-center"
                src={urlFor(experience?.companyLogo).url()}
            />
            <div className="px-0 md:px-10">
                <h4 className="text-xl font-light">{experience.jobTitle}</h4>
                <p className="font-semibold text-lg mt-1">
                    {experience.companyName}
                </p>
                <div className="flex flex-wrap justify-center space-x-2 my-2">
                    {experience?.technologies?.map((tech) => (
                        <div
                            key={tech._id}
                            className="flex flex-col items-center p-1"
                        >
                            <img
                                className="md:h-6 md:w-6 h-3 w-3 object-contain"
                                src={urlFor(tech.image).url()}
                            />
                            <p className="text-gray-400 text-[8px] md:text-xs">
                                {tech.title}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="py-2 text-gray-300">
                    {new Date(experience.dateStarted).toLocaleDateString(
                        'en-US',
                        { month: 'short', year: 'numeric' },
                    )}{' '}
                    -{' '}
                    {experience.isCurrentRole
                        ? 'Present'
                        : new Date(experience.dateEnded).toLocaleDateString(
                              'en-US',
                              { month: 'short', year: 'numeric' },
                          )}
                </p>
                <ul className="list-disc ml-5 md:text-xs text-[11px] text-left md:max-h-20 overflow-clip overflow-y-auto customScrollbar">
                    {experience.points.map((point, index) => (
                        <li key={index}>• {point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}
