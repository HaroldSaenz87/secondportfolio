"use client"

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import React from 'react'

const SkillText = () => {
  return (

    <div className='w-full h-auto flex flex-col items-center justify-center'>

        <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] text-white font-medium mt-2.5 text-center mb-3.75'>
            Making apps with modern technologies
        </motion.div>

        <motion.div variants={slideInFromRight(0.5)} className='cursive text-[20px] text-gray-200 mb-10 mt-2.5 text-center'>
            Never miss a task, deadline or idea
        </motion.div>

    </div>
  )
}

export default SkillText