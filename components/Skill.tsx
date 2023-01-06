import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'

type Props = {
    directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <div>
                <motion.img
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    src={about.src}
                    className=" rounded-full border border-gray-500 object-cover h-20 w-20 xl:h-30  xl:w-30 filter group-hover:grayscale transition duration-400 ease-in-out"
                />
                <p className="text-gray-500 text-sm">Javascript</p>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-400 ease-in-out group-hover:bg-white h-20 w-20 xl:h-30 xl:w-30 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-2xl font-bold text-black opacity-100">
                        100%
                    </p>
                </div>
            </div>
        </div>
    )
}
