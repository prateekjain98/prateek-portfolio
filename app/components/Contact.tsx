import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function Contact({}: Props) {
    return (
        <div className="sectionContainer relative justify-evenly">
            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="sectionHeading"
            >
                Contact me
            </motion.h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col space-y-10 px-5"
            >
                <h4 className="text-3xl md:text-4xl text-center text-cyan-500/50">
                    {"Let's discuss ideas and technology"}
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center justify-center space-x-5">
                        <EnvelopeIcon className="text-cyan-500 h-7 animate-pulse" />
                        <p className="text-lg md:text-xl m-2">contact@prateekjain.io</p>
                    </div>
                    <div className="flex items-center justify-center space-x-5">
                        <MapPinIcon className="text-cyan-500 h-7 animate-pulse" />
                        <p className="text-lg md:text-xl m-2">Gurugram, India</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
