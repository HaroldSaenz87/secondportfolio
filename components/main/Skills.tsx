import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    
    <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'>
        
        <SkillText />

        <div className='flex flex-row justify-center flex-wrap mt-4 gap-4 md:gap-5 items-center px-4'>
            {Frontend_skill.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>

        <div className='flex flex-row justify-center flex-wrap mt-4 gap-4 md:gap-5 items-center px-4'>
            {Backend_skill.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index}/>
            ))}
        </div>

        <div className='flex flex-row justify-center flex-wrap mt-4 gap-4 md:gap-5 items-center px-4'>
            {Full_stack.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
        
        
        <div className='flex flex-row justify-center flex-wrap mt-4 gap-4 md:gap-5 items-center px-4'>
            {Other_skill.map((image, index) => (
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
            ))}
        </div>
        

        <div className='w-full h-full absolute'>
            <div className='w-full h-full -z-10 opacity-30 absolute flex items-center justify-center bg-cover'>

                <video className='w-full h-auto' preload='false' playsInline loop muted autoPlay src="/cards-video.webm"/>

            </div>
        </div>
    
    </section>
  )
}

export default Skills