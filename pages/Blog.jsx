/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { sanityClient, urlFor} from '../sanity'
import { Contact } from '../components'

const Blog = ({ getBlogs }) => {
  return (
    <>
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start">
                <div class="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font md:text-6xl text-3xl mb-2 font-bold text-black">
                        Aymen Jdily
                    </h1>
                    <p className='text-gray-400'>
                        Web Developer
                    </p>
                    <div className='flex items-center md:items-start lg:flex-row flex-col gap-10 mt-10'>
                        <Image
                            src="/me.jpg"
                            alt='Aymen Jdily'
                            width={300}
                            height={300}
                            className='object-cover'
                        />
                        <div>
                            <p className='text-gray-500'>
                                I'm excited about all things on the web. But, I'm particular about the frontend ecosystem. I strive to share whatever I'm learning — through my blog — with developers at any opportunity I get, so they do not have to experience the difficulties I faced.
                            </p>
                            <div className='mt-5'>
                                <span className="mr-5 capitalize font-semibold underline text-black text-lg hover:text-secondary duration-200">
                                    <Link href="https://www.linkedin.com/in/aymenjdily/">
                                        Linkedin  
                                    </Link>
                                </span>
                                <span className="mr-5 capitalize font-semibold text-black underline text-lg hover:text-primary duration-200">
                                    <Link href="https://www.instagram.com/aymen_jdily/">
                                        Instagram   
                                    </Link>
                                </span>          
                                <span className="mr-5 capitalize font-semibold text-black underline text-lg hover:text-secondary duration-200">
                                    <Link href="https://github.com/Aymenjdily">
                                        Github   
                                    </Link>
                                </span>          
                            </div>    
                        </div>
                    </div>


                </div>
                <div class="">
                    <h1 className='text-2xl text-black font-semibold'>
                        My Articles
                    </h1>
                    <div className='grid md:grid-cols-2 mt-10 gap-10'>
                        {
                            getBlogs && getBlogs.map((item, index) => (
                                <div class="" key={index}>
                                    <div class="h-full border-gray-200 border-opacity-60 overflow-hidden">
                                        <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center" src={urlFor(item.mainImage).url()} alt="blog"/>
                                        <div class=" mt-5">
                                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                                                {item.blogName}
                                            </h1>
                                            <p class="leading-relaxed mb-3">
                                                {item.blogCategory}
                                            </p>
                                            <div class="flex items-center flex-wrap ">
                                                <a class="text-blue-700 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0" href={`/blog/${item.slug.current}`}>Learn More
                                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        <Contact />
    </>
  )
}

export default Blog

export const getStaticProps = async () => {
    const getBlogsQuery = `*[_type == "blogs"]`
    const getBlogs = await sanityClient.fetch(getBlogsQuery)
  
    return {
      props: {
        getBlogs
      },
      revalidate: 10
    }
  }