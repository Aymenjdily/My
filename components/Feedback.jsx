import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { urlFor } from '../sanity';

const Feedback = ({data}) => {
  return (
    <section className='py-24 px-5 container flex flex-col md:items-start items-center mx-auto w-full overflow-hidden'>
        <h1 className='font-bold my-5 md:text-5xl text-3xl capitalize mb-12'>
            on working with me
        </h1>
        <Splide 
            options={{
                perPage : 1,
                pagination : false,
                drag : "free",
                arrows : false,
            }}
            className="w-full"
        >
            {
                data.map((testimonial, index) => (
                    <SplideSlide
                        key={index}
                        className="w-full"
                    >
                        <div className="flex md:flex-row md:gap-0 gap-5 flex-col items-center">
                            <div className='flex flex-col'>
                                <div
                                    className="relative h-52 w-52"
                                >
                                    <Image layout="fill" alt={testimonial.name} src={urlFor(testimonial.imageClient).url()} className="object-cover shadow-lg object-center rounded-full" />
                                </div>

                                <div className='flex flex-col text-center mt-8'>
                                    <h2 className='font-bold text-xl'>
                                        {testimonial.name}
                                    </h2>
                                    <p className='text-gray-500'>
                                        {testimonial.profession}
                                    </p>
                                </div>
                            </div>
                            <div className="lg:flex-grow lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <q className="leading-relaxed text-xl">
                                    {testimonial.feedback}.
                                </q>
                            </div>
                        </div>
                    </SplideSlide>
                ))
            }
        </Splide>
    </section>
  )
}

export default Feedback