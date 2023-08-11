/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { sanityClient, urlFor} from '../sanity'
import { Contact, Feedback } from '../components'
import { container, item } from '../utils/motion'
import { Socials } from '../constants'

const Blog = ({ getBlogs }) => {
  return (
    <>
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-start mb-8">
                <div class="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 lg:mb-0 items-center text-center">
                    <h1 class="title-font md:text-6xl text-3xl mb-2 font-bold text-black">
                        Aymen Jdily
                    </h1>
                    <p className='text-gray-400'>
                        Full stack Developer
                    </p>
                    <div className='flex items-center md:items-start lg:flex-row flex-col gap-10 mt-10'>
                            <Image
                                src="/profile.jpg"
                                alt='Aymen Jdily'
                                width={300}
                                height={300}
                                className='object-contain object-center hover:border-[30px] duration-200 rounded-xl border-primary'
                            />
                        <div className=''>
                            <p className='text-gray-500'>
                                I'm excited about all things on the web. But, I'm particular about the frontend ecosystem. I strive to share whatever I'm learning — through my blog — with developers at any opportunity I get, so they do not have to experience the difficulties I faced.
                            </p>
                            <motion.div variants={container} whileInView="visible" initial="hidden" className='flex gap-[12px] items-center mt-5'>
                                {
                                    Socials.map((social) => (
                                        <motion.div
                                            variants={item}
                                            key={social.alt}
                                            className='border border-gray-300 p-3 rounded-full hover:bg-primary duration-200'
                                        >
                                            <Link href={social.link}>
                                                <Image 
                                                    src={social.image}
                                                    alt={social.alt}
                                                    width={20}
                                                    height={20}
                                                />
                                            </Link>
                                        </motion.div>
                                    ))
                                }
                             </motion.div>   
                        </div>
                    </div>


                </div>
                <div class="">
                    <h1 className='text-2xl text-black font-semibold'>
                        My Articles
                    </h1>
                    <div className='grid md:grid-cols-2 mt-10 gap-10'>
                        {
                            getBlogs && getBlogs.map((blog, index) => (
                                <div class="" key={index}>
                                    <div class="h-full border-gray-200 border-opacity-60 overflow-hidden">
                                        <Image width={200} height={200} class="lg:h-48 md:h-36 w-full object-cover object-center rounded-xl" src={urlFor(blog.mainImage).url()} alt="blog"/>
                                        <div class=" mt-5">
                                            <h1 class="title-font text-lg font-medium underline decoration-primary underline-offset-8 text-gray-900 mb-3">
                                                {blog.blogName}
                                            </h1>
                                            <p class="leading-relaxed mb-3">
                                                {blog.blogCategory}
                                            </p>
                                            <div class="flex items-center flex-wrap ">
                                                <Link class="cursor-pointer inline-flex bg-primary px-8 py-3 rounded-full font-semibold items-center" href={`/blog/${blog.slug.current}`}>Learn More
                                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>
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
        <Feedback />
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