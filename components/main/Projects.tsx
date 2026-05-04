import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const projects = [
    {
        title: "Sea Your Contacts",
        description: "A modern, underwater themed CRUD application built to streamline contact organization with a splash of personality. This project focuses on high performance UI interactions and secure data management.",
        image: "/contactsManager2.jpg",
    },
    {
        title: "Binary Tree Visualizer",
        description: "A simple interactive Binary Search Tree (BST) visualizer that allows users to perform real-time insertions and deletions using React and SVG.",
        image: "/BinaryTreePic.jpg",
    },
    {
        title: "LesChic",
        description: "A full stack wardrobe management system designed with a cinematic aesthetic. Featuring GSAP powered reveals and fluid responsive interface.",
        image: "/leschicPic.jpg",
    }
]

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
      
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>

      
      <div className='h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10'>
        {projects.map((project, index) => (
            <ProjectCard 
                key={index}
                src={project.image}
                title={project.title}
                description={project.description}
            />
        ))}
      </div>
    </div>
  )
}

export default Projects