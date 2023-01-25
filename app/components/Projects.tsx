import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'
import { Project } from '../typings'
import { urlFor } from '../sanity'
import { SocialIcon } from 'react-social-icons'
import { Carousel } from 'react-bootstrap'

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
            <Carousel className="w-screen z-20" interval={null}>
                {projects.map((project) => (
                    <Carousel.Item key={project._id} className="p-4">
                        <div className="flex flex-col items-center mx-auto justify-center w-[80vw] md:w-[70vw] h-[68vh] p-2 md:mt-20">
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.5 }}
                                src={urlFor(project.image).url()}
                                className="md:w-[300px] w-[200px] flex mx-auto"
                            />
                            <div className="px-2 max-w-7xl">
                                <div className="flex justify-center items-center">
                                    <h4 className="text-2xl font-semibold text-center m-0">
                                        {project.title}
                                    </h4>
                                    <SocialIcon
                                        url={project.gitUrl}
                                        fgColor="white"
                                        bgColor="transparent"
                                    />
                                </div>
                                <p className="text-xs md:text-base px-10">
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
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="w-full absolute top-[30%] bg-cyan-500/20 left-0 h-[300px] md:h-[250px] -skew-y-12" />
        </div>
    )
}
