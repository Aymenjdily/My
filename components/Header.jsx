import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="z-[5] overflow-hidden">
        <div className=" flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto z-[5]">
                {/* <span className="mr-5 capitalize text-md hover:text-secondary duration-200">
                    <Link href="/About">
                        about   
                    </Link>
                </span> */}
                <span className="mr-5 capitalize text-md hover:text-primary scroll-smooth duration-200">
                    <Link href="#contact">
                        contact   
                    </Link>
                </span>
            </nav>
            <span 
                className="flex order-first text-center lg:order-none lg:w-1/5 title-font font-extrabold uppercase text-4xl items-center text-black lg:items-center lg:justify-center underline mb-4 md:mb-0"
            >
                <Link href="/">
                    aymen
                </Link>
            </span>
            
            <div className="lg:w-2/5 inline-flex lg:justify-end z-[5]">
                <span className="mr-5 capitalize font-semibold text-md hover:text-secondary scroll-smooth duration-200">
                    <Link href="/">
                        Home   
                    </Link>
                </span>
            </div>
        </div>
    </header>
  )
}

export default Header