/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="flex items-center justify-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
            {/* <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/> */}
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient rounded-full'/>
            <div 
                className="lg:flex-grow md:px-24 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left py-6 mb-16 md:mb-0 items-start z-[2] overflow-hidden"
            >
                <h1 className='text-xl mb-1 font-bold'>
                    Aymen
                </h1>
                <span className='mb-5 text-gray-400 font-semibold'>
                    Web Developer
                </span>
                <p className='md:text-5xl text-4xl font-bold'>
                    Hey There ! I'm a Wordpress Developer Passionate
                    About Creating High-Performance
                    Websites.
                </p>
            </div>
        </div>    
    </section>
  )
}

export default Intro