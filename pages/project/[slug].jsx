import React from 'react'
import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'
import Image from 'next/image'
import { fetchProjects } from '../../utils/fetchProjects'

const ProjectDetails = ({project}) => {
console.log(project)
  return (
    <section class="text-gray-600 body-font">
        <div className='container mx-auto px-5 pt-24'>
            <h1 className='md:text-6xl text-4xl capitalize text-black font-bold mb-5'>
                {project.projectName}
            </h1>
            <p className='text-xl'>
                {project.projectType}
            </p>
        </div>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-10 justify-center">
            <div class="relative h-[100vh] lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image layout="fill" class="object-cover object-center rounded-xl shadow-lg" alt="hero" src={urlFor(project.mainImage).url()} />
            </div>
            <div class="relative h-[100vh] lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image layout="fill" class="object-cover object-center rounded-xl shadow-lg" alt="hero" src={urlFor(project.secondImage).url()} />
            </div>
        </div>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div className='md:w-2/5 md:mb-0 mb-12'>
                <h2 class="md:text-4xl text-2xl mb-5 font-bold capitalize text-black">
                    project overview
                </h2>
                <p>
                    {project.projectDescription}
                </p>
            </div>
            <div class="md:w-3/5 md:pl-6">
                <h2 class="md:text-3xl text-xl mb-5 font-bold capitalize text-black">
                    skills used
                </h2>
                <div class="flex flex-wrap gap-10 md:mt-4 mt-6">
                    {
                        project.techs.map((tech, index) => (
                            <div className='relative w-32 h-32' key={index}>
                                <Image fill alt="project-Image" src={urlFor(tech).url()} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectDetails

export const getStaticProps = async ({params}) => {
    const query = `*[_type == "projects" && slug.current == "${params.slug}"][0]`
    const project = await sanityClient.fetch(query)

    return{
        props: {
            project
        },
        revalidate:10
    }
}

export const getStaticPaths = async() => {
    const projects = await fetchProjects();
    const paths  = projects.map((project) =>({
       params : {
         slug : project.slug.current
       }
    }));
  
    return {
      paths,
      fallback : false
    }
}