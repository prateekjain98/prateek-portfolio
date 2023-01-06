import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'

type Props = {}

export default function Projects({}: Props) {
    const projects = [1, 2, 3]
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
                {projects.map((value, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-44 h-screen"
                    >
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            src={about.src}
                            className="w-[250px]"
                        />
                        <div className=" px-0 md:px-10 max-w-6xl">
                            <h4 className="text-2xl font-semibold text-center">
                                Demo
                            </h4>
                            <p className="text-center md:text-left">
                                Description about the project will be shown here
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-cyan-500/20 left-0 h-[300px] md:h-[250px] -skew-y-12" />
        </div>
    )
}
