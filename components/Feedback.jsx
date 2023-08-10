import React from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../utils/motion'
import { services } from '../constants'

const Feedback = () => {
  return (
    <section className='container mx-auto py-12 px-10 overflow-hidden'>
        <motion.h1 initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration:0.5 }} className='lg:text-[124px] md:text-[100px] text-[50px] font-bold'>
            My Focus
        </motion.h1>
        <motion.div initial="hidden" variants={container} whileInView="visible" className='mt-[84px] flex flex-col gap-[70px] lg:px-16 md:px-0 px-5'>
          {
            services.map((service) => (
              <motion.div key={service.title} variants={item} className='flex md:items-center md:flex-row flex-col md:gap-0 gap-5 border-b border-[#E8E7EA] pb-[15px]'>
                <h1 className='flex-1 text-[30px] font-[600] underline decoration-primary underline-offset-8'>
                  {service.title}
                </h1>
                <p className='flex-1 text-gray-500 text-[18px] font-[400]'>
                  {service.description}
                </p>
              </motion.div>
            ))
          }
        </motion.div>
    </section>
  )
}

export default Feedback