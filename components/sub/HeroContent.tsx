"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';


const HeroContent = () => {
  return (

    <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-40 w-full z-20 gap-12">


        <div className="flex-1 flex flex-col gap-5 justify-center text-start">

            <motion.div variants={slideInFromTop} className="Welcome-box py-2 px-1.75 border border-[#7042f88b] opacity-[0.9]">
                
                <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />

                <h1 className="Welcome-text text-[13px]">
                    Fullstack Developer Portfolio
                </h1>

            </motion.div>

            <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-150 w-auto h-auto">
                <span>
                    Providing
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500"> the best </span>
                    project experience
                </span>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-150">

                I&apos;m a Full Stack Software Engineer with experience in Website, Mobile, and software development. Check out my projects and skills.

            </motion.p>

            <motion.a variants={slideInFromLeft(1)} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-50">

                Learn More!

            </motion.a>
            
        </div>

         <motion.div variants={slideInFromRight(0.8)} className="flex-1 flex justify-center items-center">
            <div className="relative overflow-visible">

                <div className="relative glass rounded-3xl p-2 glow-border overflow-visible">

                    <Image 
                        src="/Picture_me.png" 
                        alt="Harold Saenz" 
                        height={420} 
                        width={420} 
                        className="rounded-2xl" 
                    />

                    <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-white">Available for work</span>
                        </div>
                    </div>

                </div>

            </div>
        </motion.div>

    </motion.div>

  )
}

export default HeroContent