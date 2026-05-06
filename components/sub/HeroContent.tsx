"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import { ArrowUpRight, Download } from 'lucide-react';
import { AnimatedButton } from '@/utils/AnimatedButton';


const HeroContent = () => {
  return (

    <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-40 w-full z-20 gap-12">


        <div className="flex-1 flex flex-col gap-5 justify-center text-start">

            <motion.div variants={slideInFromTop} className="Welcome-box py-2 px-1.75 border border-[#7042f88b] opacity-[0.9]">
                
                <SparklesIcon className="text-[#b49bff] mr-2.5 h-5 w-5" />

                <h1 className="Welcome-text text-[13px]">
                    Software Engineer
                </h1>

            </motion.div>

            <motion.div variants={slideInFromLeft(0.3)} className='flex items-center gap-3'>

                <div className='h-px w-8 bg-linear-to-r from-purple-500 to-transparent' />

                <span className='text-xs tracking-[0.25em] uppercase text-gray-500 font-medium'>
                    Based in Orlando,FL
                </span>
                
            </motion.div>

            <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white w-auto h-auto max-w-150">
                <span>
                    Built with
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500"> curiosity, </span>
                    made with purpose
                </span>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-150">

                I&apos;m an aspiring Software Engineer and Computer Science Student at UCF that is endlessly curious about how things work under the hood. From websites to mobile apps, I love builing things that are clean, and thoughtfully crafted.

            </motion.p>

            <div className="flex flex-row gap-5">


                <motion.div variants={slideInFromLeft(1.2)}>
                    <a href="/Harold_Saenz_Resume.pdf" download="Harold_Saenz_Resume.pdf">
                        <AnimatedButton>
                            <Download className="w-5 h-5" />
                            Download Resume
                        </AnimatedButton>
                    </a>
                </motion.div>

            </div>
            
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