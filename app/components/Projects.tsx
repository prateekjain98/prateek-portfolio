import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import { SocialIcon } from 'react-social-icons'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    //const projects = [1, 2, 3]
    return (
        <div className="sectionContainer relative justify-evenly">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="sectionHeading"
            >
                Projects
            </motion.h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 customScrollbar">
                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="w-full pt-10 flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            src={urlFor(project.image).url()}
                            className="md:w-[350px] w-[250px]"
                        />
                        <div className=" px-0 md:px-10 max-w-7xl">
                            <div className="flex justify-center items-center">
                                <h4 className="text-2xl font-semibold text-center">
                                    {project.title}
                                </h4>
                                <SocialIcon
                                    url={project.gitUrl}
                                    fgColor="white"
                                    bgColor="transparent"
                                />
                            </div>
                            <p className="text-center md:text-left">
                                {project.summary}
                            </p>
                            <div className="flex flex-wrap justify-center space-x-2 my-2">
                                {project?.technologies?.map((tech) => (
                                    <div
                                        key={tech._id}
                                        className="flex flex-col items-center p-1"
                                    >
                                        <img
                                            className="md:h-6 md:w-6 h-5 w-5 object-contain"
                                            src={urlFor(tech.image).url()}
                                        />
                                        <p className="text-gray-400 text-xs">
                                            {tech.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-cyan-500/20 left-0 h-[300px] md:h-[250px] -skew-y-12" />
        </div>
    )
}
