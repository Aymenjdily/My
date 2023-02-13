import React from 'react'
import { urlFor } from '../sanity'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ProjectCard = ({data : {slug, mainImage, projectType}}) => {
  return (
    <Link href={`/project/${slug.current}`}>
      <div 
        className='relative h-[60vh] w-full rounded-2xl shadow-lg cursor-pointer'
      >
          <Image src={urlFor(mainImage).url()} fill alt="project-Image" className='object-cover rounded-2xl object-top' />
          <div className={`absolute w-full h-full ${projectType === "Landing Page" ? "bg-gradient-to-t from-secondary/20 to-white/20" : "bg-lightBlue/20"}`}>
              <div className='flex items-end justify-start h-full'>
                  <h1 className=' text-white text-2xl m-6 py-2 px-4 capitalize font-bold bg-lightBlue rounded-xl'>
                      {projectType}
                  </h1>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default ProjectCard