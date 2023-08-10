import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navLinks } from '../constants'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import { CgMenuRightAlt } from 'react-icons/cg'

const Header = () => {
  return (
    <header className="py-6 container overflow-hidden mx-auto md:px-0 px-8">

        <motion.div initial={{ opacity:0, y:-100 }} transition={{ duration: 1 }} animate={{ opacity:1, y:0 }} className='flex justify-between items-center'>
            <Link href="/" className='flex items-center gap-[10px]'>
                <h1 className='font-extrabold uppercase text-[35px]'>
                    aj
                </h1>
                <span className='text-[12px] text-gray-500'>
                    Aymen
                    <br/>
                    Jdily
                </span>
            </Link>

            {/* Desktop */}

            <nav className='md:flex hidden items-center gap-[44px]'>
                {
                    navLinks.map((item) => (
                        <Link
                            key={item.title}
                            href={item.link}
                            className='text-[17px] font-semibold capitalize hover:text-gray-500 duration-200'
                        >
                            {item.title}
                        </Link>
                    ))
                }
            </nav>

            {/* Mobile */}

            <div className='md:hidden flex'>
                <Menu >
                    <Menu.Button>
                        <CgMenuRightAlt className='text-3xl' />
                    </Menu.Button>
                    <Menu.Items className="flex flex-col gap-8 bg-primary z-20 p-12 w-full h-full text-black fixed right-0 bottom-0">
                            {
                                navLinks.map((item) => (
                                    <Menu.Item
                                        key={item.title}
                                    >
                                        <Link
                                            href={item.link}
                                            className='capitalize font-semibold text-lg'
                                        >
                                            {item.title}
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                    </Menu.Items>
                    </Menu>
                </div>
        </motion.div>


    </header>
  )
}

export default Header