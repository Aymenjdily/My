import React from 'react'
import { urlFor } from '../sanity'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({data : {slug, mainImage, projectName, url}, index}) => {
  return (
    <Link href={`${url ? url : "#"}`}>
      <div 
        className={`relative h-[60vh] w-full shadow-lg cursor-pointer`}
      >
          <Image src={urlFor(mainImage).url()} fill alt="project-Image" className='object-cover' />
          <div className={`absolute w-full h-full bg-black/40`}>
              <div className='flex flex-col items-end justify-end h-full'>
                  {
                    url && (
                      <p className='ml-6 cursor-pointer text-green-300 underline font-bold px-5'>
                      Live Preview
                      </p>
                    )
                  }
                  <h1 className={`text-white text-2xl underline mb-3 py-2 px-5 capitalize font-bold `}>
                      {projectName}
                  </h1>
              </div>
          </div>
      </div>
    </Link>
  )
}

export default ProjectCard