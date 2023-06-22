import React from 'react'

import { sanityClient } from '../../sanity'
import { urlFor } from '../../sanity'

import Image from 'next/image'

const BlogDetails = ({ blog }) => {
  console.log(blog)
  return (
    <section className='container mx-auto py-16 px-4'>
      <div className='w-full h-64 relative'>
        <Image
          src={urlFor(blog.mainImage).url()}
          alt={blog.blogName}
          layout='fill'
          className='object-cover object-center'
        />
      </div>
      <div className='flex md:flex-row flex-col gap-10 mt-10'>
        <div className='lg:pr-24 md:pr-16 w-full'>
          <h1 className='text-4xl font-bold'>
            {blog.blogName}
          </h1>
          <p className='mt-2 text-gray-400'>
            {blog.blogCategory}
          </p>
        </div>
        <div className='w-full'>
          <p className='text-gray-600'>
            {blog.blogTextOne}
          </p>
          <p className='my-5'>
            Check : <a href={blog.url} className='underline text-blue-600'>{blog.blogName}</a>
          </p>
          <div className='h-64 w-full relative'>
            <Image
              src={urlFor(blog.secondImage).url()}
              alt={blog.blogName}
              layout='fill'
              className='object-cover object-center'
            />
          </div>
          <p className='text-gray-600 mt-5'>
            {blog.blogTextTwo}
          </p>
        </div>
      </div>
    </section>
  )
}

export default BlogDetails

export const getStaticProps = async ({params}) => {
    const query = `*[_type == "blogs" && slug.current == "${params.slug}"][0]`
    const blog = await sanityClient.fetch(query)

    return{
        props: {
          blog
        },
        revalidate:10
    }
}

export const getStaticPaths = async() => {
    const BlogsQuery = `*[_type == "blogs"]`
    const blogs = await sanityClient.fetch(BlogsQuery);

    const paths  = blogs && blogs.map((blog) => ({
       params : {
         slug : blog.slug.current
       }
    }));
  
    return {
      paths,
      fallback : false
    }
}