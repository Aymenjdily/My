import React from 'react'

import Image from 'next/image'

import { urlFor } from '../sanity'

import Link from 'next/link'

const Career = ({data}) => {
  return (
    <section className="text-gray-600 body-font">
        {
            data.map((career, index) => (
                <div className="container mx-auto flex md:px-24 px-12 py-24 lg:flex-row flex-col items-center" key={index}>
                    <div className="lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-3xl mb-4 capitalize text-gray-900">
                            my career so far
                        </h1>
                        <p className="my-4 leading-relaxed md:w-96 text-gray-400">
                            {
                                career.career
                            }
                        </p>
                    </div>
                    <div className="">
                        <div className='grid md:grid-cols-2 gap-5'>
                            {
                                career.skills.map((item, index) => (
                                    <div key={index} className='flex items-center gap-3'> 
                                         <Image className="object-contain" width={50} height={50} alt={item.title} src={urlFor(item.image).url()} />
                                        <span className="text-3xl text-gray-500 capitalize">
                                            {item.title}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default Career