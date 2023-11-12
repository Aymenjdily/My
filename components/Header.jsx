import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { navLinks } from '../constants'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import { CgMenuRightAlt } from 'react-icons/cg'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <header className="py-6 container overflow-hidden mx-auto sm:px-10 px-5">
            <motion.div initial={{ opacity:0, y:-100 }} transition={{ duration: 1 }} animate={{ opacity:1, y:0 }} className='flex justify-between items-center'>
                <Link href="/" className='flex items-center gap-[10px]'>
                    <h1 className='text-[35px] font-lilita'>
                        Code with Aymen
                    </h1>
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
                        <Menu.Button onClick={() => setToggle(true)}>
                            <CgMenuRightAlt className='text-4xl'  />
                        </Menu.Button>
                        {
                            toggle && (
                                <Menu.Items className="flex flex-col gap-8 bg-primary z-20 p-12 w-full h-full text-black fixed right-0 bottom-0">
                                        <div className='mb-10 flex items-end justify-end' onClick={() => setToggle(false)}>
                                            <Image
                                                src="/close.svg"
                                                alt="close"
                                                width={40}
                                                height={30}
                                            />
                                        </div>
                                        {
                                            navLinks.map((item) => (
                                                <Menu.Item
                                                    key={item.title}
                                                >
                                                    <Link
                                                        href={item.link}
                                                        className='capitalize font-semibold text-2xl underline underline-offset-8'
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </Menu.Item>
                                            ))
                                        }
                                </Menu.Items>
                            )
                        }
                        </Menu>
                    </div>
            </motion.div>
        </header>
    )
}

export default Header