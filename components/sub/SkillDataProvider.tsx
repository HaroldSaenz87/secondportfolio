"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ( {src, width, height, index} : Props) => {

    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    }

    const animationDelay = 0.3;
  return (
    
    <motion.div ref={ref} initial="hidden" variants={imageVariants} animate={inView ? "visible" : "hidden"} custom={index} transition={{delay: index * animationDelay}}>

        <Image src={src} width={width} height={height} alt='skills image' className="w-12.5 h-12.5 sm:w-12.5 sm:h-12.5 md:w-16.25 md:h-16.25 lg:w-21.25 lg:h-21.25 object-contain" />

    </motion.div>
  )
}

export default SkillDataProvider