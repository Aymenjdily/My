/* eslint-disable react/no-unescaped-entities */
import React,{ useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Switch } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Socials } from '../constants'
import { container, item } from '../utils/motion'
import { BiSolidHandDown } from 'react-icons/bi'

const Intro = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <section className="container mx-auto sm:py-24 py-12 md:px-16 px-8">
            <div className='flex md:flex-row items-start justify-center flex-col md:gap-[20px] gap-[60px]'>
                <motion.div initial={{ opacity: 0, scale: 0.8}} animate={{ opacity:1, scale: 1}} transition={{ duration: 0.5 }}>
                    <p className='text-[20px] text-gray-500'>
                        Hey there!
                    </p>
                    <h1 className='xl:text-[124px] font-lilita lg:text-[100px] md:text-[80px] text-[50px] '>
                        I'am a Web<br className='xl:flex hidden'/>{" "}
                        Developer.
                    </h1>
                </motion.div>
                <div className=''>
                    <div className='relative flex items-center justify-center animate-bounce w-[125px] h-[125px]'>
                        <Image
                            src="/scroll.svg"
                            alt="scroll"
                            fill
                        />
                        <BiSolidHandDown className='p-3  rounded-full text-5xl bg-primary' />
                        {/* <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${
                                enabled ? 'bg-gray-500' : 'bg-black'
                            } absolute inline-flex h-6 w-11 rotate-90 items-center rounded-full`}
                            >
                            <span className="sr-only">Enable notifications</span>
                            <span
                                className={`${
                                enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-primary transition`}
                            />
                        </Switch> */}
                    </div>
                </div>
            </div>
            <motion.div variants={container} whileInView="visible" initial="hidden" className='my-28 flex gap-[12px] items-center justify-center'>
                {
                    Socials.map((social) => (
                        <motion.div
                            variants={item}
                            key={social.alt}
                            className='border border-gray-300 p-3 rounded-full hover:bg-primary duration-200'
                        >
                            <Link href={social.link}>
                                <Image 
                                    src={social.image}
                                    alt={social.alt}
                                    width={20}
                                    height={20}
                                />
                            </Link>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Intro