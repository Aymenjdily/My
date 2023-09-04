import React from 'react'
import { motion } from 'framer-motion'
import { container, item } from '../utils/motion'
import { services, sponsors } from '../constants'
import Image from 'next/image'

const Feedback = () => {
  return (
    <section className='container mx-auto py-12 px-10 overflow-hidden'>
        <motion.h1 initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration:0.5 }} className='lg:text-[124px] md:text-[100px] text-[50px] font-bold'>
            My Focus
        </motion.h1>
        <motion.div initial="hidden" variants={container} whileInView="visible" className='mt-[84px] flex flex-col gap-[70px] lg:px-16 md:px-0 px-5 md:mb-[140px] mb-[80px]'>
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
        <div className=' flex flex-col justify-between items-center'>
          <h1 className='mb-[70px] text-2xl font-bold'>
            Trusted by
          </h1>
          <motion.div variants={container} initial="hidden" whileInView="visible" className='flex items-center justify-center flex-wrap gap-[80px]'>
            {
              sponsors.map((sponsor) => (
                <motion.div variants={item} key={sponsor.alt} className='relative flex items-center justify-center'>
                  <Image
                    alt="shape"
                    src="/rectangle.svg"
                    width={200}
                    height={200}
                    className=''
                  />
                    <div className='z-10 flex items-center justify-center w-full h-full absolute top-0 '>
                    <Image
                      alt={sponsor.alt}
                      src={sponsor.image}
                      width={120}
                      height={150}
                      className='object-contain rounded-xl'
                    />
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
    </section>
  )
}

export default Feedback