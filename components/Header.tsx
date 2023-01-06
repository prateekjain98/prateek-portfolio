import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-30">
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
                <SocialIcon
                    url="https://www.linkedin.com/in/prateek9jain8/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.github.com/prateekjain98/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.instagram.com/always_qrious/"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>
            {/* Giving hydration error */}
            <Link href="#contact">
                <motion.div
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
                    <p className="uppercase hidden md:inline-flex text-gray-400">
                        contact me
                    </p>
                </motion.div>
            </Link>
        </header>
    )
}
