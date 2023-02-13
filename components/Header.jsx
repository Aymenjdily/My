import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="z-[5] overflow-hidden">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                <span className="mr-5 capitalize font-semibold text-lg hover:text-secondary">
                    <Link href="/About">
                        about   
                    </Link>
                </span>
                <span className="mr-5 capitalize font-semibold text-lg hover:text-primary scroll-smooth">
                    <Link href="#contact">
                        contact   
                    </Link>
                </span>
            </nav>
            <motion.span 
                initial={{ y: -100 }}
                whileInView={{ y:0}}
                transition={{ duration: 0.5 }}
                className="flex order-first text-center lg:order-none lg:w-1/5 title-font font-extrabold uppercase text-5xl items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
            >
                <Link href="/">
                    aymen
                    <br/>
                    jdily
                </Link>
            </motion.span>
            <div className="lg:w-2/5 inline-flex lg:justify-end z-[5]">
                <Link href="/#projects">
                    <button className="inline-flex items-center capitalize bg-gradient-to-r from-lightBlue via-lightBlue to-primary text-white border-0 py-3 px-10 focus:outline-none hover:bg-gray-200 rounded-lg text-lg mt-4 md:mt-0 shadow-lg">
                        view work
                    </button>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header