import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

const textArray = [
    'Developed web applications on MERN stack (MongoDB, Express.js, React.js, Node.js)',
    'Developed cross platform mobile application on React Native & deployed on both Android & iOS stores ',
    'Built features on React.js, Python & SQL & implemented REST APIs of crypto exchanges for internal accounting software',
]
export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            //TODO: Animation not working in parent div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1.5 }}
            className="sectionContainer pt-10 relative text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto"
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
                src={urlFor(pageInfo?.aboutImage).url()}
                className="-mb-20 md:mb-0 m-10 flex-shrink-0 h-40 object-cover md:h-72 xl:h-[300px]"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <p className="md:text-base text-sm md:p-2">
                    {pageInfo?.backgroundInfo}
                </p>
            </motion.div>
        </motion.div>
    )
}
