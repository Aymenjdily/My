import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const date = new Date()
  let year = date.getFullYear()

  return (
    <footer className="mt-20">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <span 
                className="flex order-first text-center lg:order-none lg:w-1/5 title-font font-extrabold uppercase text-5xl items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
            >
                <Link href="/">
                    aymen
                    <br/>
                    jdily
                </Link>
            </span>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">&copy; {year} All rights reserved —
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@aymenjdily</a>
            </p>
            <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <span className="mr-5 capitalize font-semibold text-lg hover:text-secondary">
                    <Link href="/About">
                        about   
                    </Link>
                </span>
                <span className="mr-5 capitalize font-semibold text-lg hover:text-primary">
                    <Link href="/#contact">
                        contact   
                    </Link>
                </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer