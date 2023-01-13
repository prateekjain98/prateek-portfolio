import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
    return (
        <header className="sticky top-0 md:p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-30">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="flex flex-row items-center"
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}
            </motion.div>
            {/* Giving hydration error */}
            <motion.div
                onClick={() => (window.location.href = '#contact')}
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="uppercase hidden m-0 md:inline-flex text-gray-400">
                    contact me
                </p>
            </motion.div>
        </header>
    )
}
