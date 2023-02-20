import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = ({data}) => {
  return (
    <div className='container overflow-hidden mx-auto py-24' id='projects'>
        <div className='px-4 mb-20'>
          <h1 className='text-5xl mb-2 capitalize font-bold'>
            some of my projects <span className='text-primary'>( {data.length} )</span> 
          </h1>
          <h3 className='text-lg capitalize text-gray-500'>
            ( personal, freelance, ancient works )
          </h3>
        </div>
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