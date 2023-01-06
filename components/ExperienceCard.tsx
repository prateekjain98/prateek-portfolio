import React from 'react'
import { motion } from 'framer-motion'
import about from './about.png'

type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-screen md:w-[62vw] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200">
            <motion.img
                initial={{
                    y: -10,
                    opacity: 0,
                }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="h-20 rounded-full xl:h-[80px] object-cover object-center"
                src="https://storage.googleapis.com/evolv-assets/brand/EvolvLogo.png"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-xl font-light">Co-founder & CTO</h4>
                <p className="font-semibold text-lg mt-1">Evolv Fit</p>
                <div className="flex space-x-2 my-2">
                    <img className="h-7 rounded-full" src={about.src} />
                    <img className="h-7 rounded-full" src={about.src} />
                </div>
                <p className="uppercase py-2 text-gray-300">
                    Oct 2021 - Present
                </p>
                <ul className="list-disc ml-5 text-xs text-left">
                    <li>
                        Ideated & designed UI/UX for a trainer web app & user
                        mobile app based on training 200+ users for fitness &
                        nutrition
                    </li>
                    <li>
                        Built complete architecture for the product from scratch
                        using MERN stack, React Native, AWS, GCP Storage &
                        Firebase
                    </li>
                    <li>
                        Owned the development, maintenance & deployment for
                        web, android & iOS apps for 10+ trainers & 400+ users
                    </li>
                </ul>
            </div>
        </article>
    )
}
