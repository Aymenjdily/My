import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Intro = () => {
  return (
    <section className="md:h-[70vh] h-[80vh] flex items-center justify-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
            <motion.div 
                initial={{ y:200 }}
                animate={{ y:0}}
                transition={{ duration: 0.8 }}
                className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start z-[2] overflow-hidden">
                <h1 className="title-font lg:text-6xl md:text-5xl text-3xl mb-4 font-bold text-gray-900">A FullStack <span className='bg-secondary px-2'>Developer</span> passionate 
                    <br />about creating <span className='underline decoration-lightBlue'>High-Performance</span> 
                    <br />Projects 
                </h1>
                <p className="mb-8 lg:text-2xl md:text-xl text-lg leading-relaxed font-light text-gray-600">
                    <span className='underline'>Motivated</span> web developer with experience creating custom websites <br/> and platforms through <span className='underline'>JS</span> and its <span className='underline'>ecosystem</span>. <span className='underline'>Strong</span> and <span className='underline'>creative</span>.
                </p>
                <div className="flex justify-center">
                    <Link href="#projects">
                        <button className="inline-flex items-center capitalize bg-gradient-to-r from-lightBlue via-lightBlue to-primary text-white border-0 py-3 px-10 focus:outline-none hover:bg-gray-200 rounded-lg text-xl mt-4 md:mt-0 shadow-lg">
                            view work
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>    
    </section>
  )
}

export default Intro