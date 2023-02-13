import React from 'react'
import ProjectCard from './ProjectCard'
import { urlFor } from '../sanity'

const Projects = ({data}) => {
  return (
    <div className='container overflow-hidden mx-auto py-24' id='projects'>
        <div className='grid md:grid-cols-2 px-4 gap-20'>    
            {
                data.map((project, index) => (
                    <ProjectCard key={index} data={project} />
                ))
            }
        </div>
    </div>
  )
}

export default Projects