import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity'
import { motion } from 'framer-motion'

const GetToKnow = ({data}) => {
  return (
    <section className="container mx-auto">
        {
            data.map((card, index) => (
                <div className="flex px-5 lg:flex-row flex-col lg:gap-[100px] items-center" key={index}>
                    <motion.div
                        initial={{ opacity:0, scale:0.8 }}
                        whileInView={{ opacity:1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-1 flex-col items-start"
                    >
                        <p className='text-[20px] mb-4'>
                            About me
                        </p>
                        <p className="leading-[44px] xl:text-[32px] lg:text-[25px] text-[22px] text-black font-bold">
                            {card.textOne}
                        </p>
                        <span className='my-5 font-semibold bg-primary p-2 px-4 text-black'>
                            {card.quote}
                        </span>
                        <p className="mb-8 leading-[44px] xl:text-[32px] lg:text-[25px] text-[22px] text-black font-bold">
                            {card.textTwo}
                        </p>
                    </motion.div>
                    <div
                        className="flex flex-1 items-center justify-center "
                    >
                        <Image className="object-cover " alt="hero" width={500} height={500} src={urlFor(card.mainImage).url()} />
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default GetToKnow