import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import hero from './hero.jpg'

type Props = {}

const categories = ['About', 'Experience', 'Skills', 'Projects']

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, Prateek here',
            'I like to build products',
            '< Design Critic />',
        ],
        loop: true,
        //delaySpeed: 500,
    })
    return (
        <div className="sectionContainer space-y-8 justify-center text-center">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-40 mx-auto object-cover"
                src={hero.src}
                alt="Profile Picture"
            />
            <div className="z-20">
                <h2 className="text-sm p-5 uppercase text-gray-400 tracking-[7px]">
                    Fullstack Developer
                </h2>
                <h1 className="text-2xl md:text-5xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="cyan" />
                </h1>
                <div className="mt-5">
                    {categories.map((value, index) => (
                        <Link href={`#${value.toLowerCase()}`} key={index}>
                            <button className="heroButton">{value}</button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
