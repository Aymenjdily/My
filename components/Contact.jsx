import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Contact = () => {
  return (
    <section className='container mx-auto py-[100px] px-10' id="contact">
        <div className='flex flex-col items-center justify-center gap-[30px]'>
            <h3 className='text-gray-500 text-[20px] font-[400]'>
                you are interested ?
            </h3>
            <motion.h1 initial={{ opacity:0, scale: 0.8}} transition={{ duration: 0.5}} whileInView={{ opacity:1 , scale: 1}} className='lg:text-[124px] md:text-[100px] text-[50px] font-bold'>
                Let&#39;s Talk
            </motion.h1>
            <Link href="mailto: aymenjdily@gmail.com" className='bg-primary text-black font-semibold px-10 text-xl py-3 rounded-full'>
                Mail me
            </Link>
        </div>
    </section>
  )
}

export default Contact