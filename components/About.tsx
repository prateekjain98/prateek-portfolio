import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'

type Props = {}

const textArray = [
    'Developed web applications on MERN stack (MongoDB, Express.js, React.js, Node.js)',
    'Developed cross platform mobile application on React Native & deployed on both Android & iOS stores ',
    'Built features on React.js, Python & SQL & implemented REST APIs of crypto exchanges for internal accounting software',
]
export default function About({}: Props) {
    return (
        <motion.div
            //TODO: Animation not working in parent div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1.5 }}
            className="sectionContainer relative text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto"
        >
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="sectionHeading"
            >
                About
            </motion.h3>
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                src={about.src}
                className="-mb-20 md:mb-0 m-10 flex-shrink-0 h-40 object-cover md:h-80 xl:h-[300px]"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                {textArray.map((value, index) => (
                    <p key={index} className="text-base md:p-2">
                        {value}
                    </p>
                ))}
            </motion.div>
        </motion.div>
    )
}
