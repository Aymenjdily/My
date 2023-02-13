import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity'
import Link from 'next/link'

const GetToKnow = ({data}) => {
  return (
    <section
        className="text-gray-600 body-font">
        {
            data.map((card, index) => (
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" key={index}>
                    <div
                        
                        className="w-full h-[60vh] mb-10 md:mb-0 relative"
                    >
                        <div className='absolute z-[1] w-[100%] h-[100%] rounded-full blue__gradient'/>
                        <div className='absolute z-[0] w-[100%] h-[100%] right-20 bottom-20 blue__gradient'/>
                        <Image className="object-cover z-[2] object-center rounded-xl border-black border-2 shadow-lg" alt="hero" fill src={urlFor(card.mainImage).url()} />
                    </div>
                    <div
                        className="w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center relative z-[2] overflow-hidden"
                    >
                        <h1 className="title-font md:text-5xl sm:text-4xl text-3xl mb-4 capitalize font-bold text-gray-900">
                            {card.title}
                        </h1>
                        <p className="leading-relaxed">
                            {card.textOne}
                        </p>
                        <span className='my-8 font-semibold bg-secondary px-2 text-black'>
                            {card.quote}
                        </span>
                        <p className="mb-8 leading-relaxed">
                            {card.textTwo}
                        </p>
                        <div className="flex justify-center">
                            <Link href="/About">
                                <button className="inline-flex items-center capitalize bg-gradient-to-r from-lightBlue via-lightBlue to-primary text-white border-0 py-3 px-10 focus:outline-none hover:bg-gray-200 rounded-lg text-xl mt-4 md:mt-0 shadow-lg">
                                    get to know me
                                </button>
                            </Link>
                       </div>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default GetToKnow