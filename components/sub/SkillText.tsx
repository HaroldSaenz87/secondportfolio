"use client"

import { slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

        {/* Main Header */}
        <motion.div 
            variants={slideInFromLeft(0.5)} 
            className='text-[30px] text-white font-medium mt-2.5 text-center mb-3.75'
        >
            Making apps with modern technologies
        </motion.div>

        
        <motion.div 
            variants={slideInFromRight(0.5)} 
            className='text-[20px] text-gray-400 font-light mb-10 mt-2.5 text-center tracking-wide'
        >
            Bridging the gap between the server and the screen
        </motion.div>

    </div>
  )
}

export default SkillText