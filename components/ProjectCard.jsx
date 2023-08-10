import React from 'react'
import { urlFor } from '../sanity'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectCard = ({data : {slug, mainImage, projectName, url}, index}) => {
  return (
    <Link href={`${url ? url : "#"}`}>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity:1 }}
        transition={{ duration: 0.8 }} 
        className={`relative h-screen w-full shadow-lg cursor-pointer`}
      >
          <Image src={urlFor(mainImage).url()} fill alt="project-Image" className='object-cover' />
          <div className={`absolute w-full h-full bg-black/50`}>
              <div className='flex flex-col items-center justify-center h-full'>
                  <h1 className={`text-white text-center leading-[50px] text-4xl underline decoration-primary underline-offset-8 mb-3 py-2 px-5 capitalize font-bold `}>
                      {projectName}
                  </h1>
              </div>
          </div>
      </motion.div>
    </Link>
  )
}

export default ProjectCard