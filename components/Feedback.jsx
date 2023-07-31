import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
import { urlFor } from '../sanity';

const Feedback = ({data}) => {
  return (
    <section className='py-24 px-8 container flex flex-col md:items-start items-center mx-auto w-full overflow-hidden'>
        <div>
            <h1 className='font-bold text-3xl capitalize'>
                My experience
            </h1>
            <p className='mt-3 text-gray-400 md:w-[900px]'>
                As a junior web developer, I have been working with Wordpress and React.js, Vue.js for front-end development, gaining hands-on experience in creating interactive and responsive user interfaces. I have a strong attention to detail and a passion for creating visually appealing websites that deliver an excellent user experience. On the back-end, I have been working with Express.js and Laravel, learning how to build robust server-side applications and RESTful APIs. Through my projects, I have developed a solid understanding of the full-stack web development process and continue to expand my skills to deliver high-quality and efficient web solutions.
            </p>
        </div>

        <div className='py-6 grid sm:grid-cols-2 gap-8 lg:grid-cols-4 mt-10 w-full'>
            <div>
                <h1 className='text-lg'>Korair_</h1>
                <div className='mt-4 text-gray-400'>
                    <p>Internship Full stack Developer</p>
                    <p className='text-sm mt-2'>
                        jul 2023 - Present
                    </p>
                </div>
            </div>
            <div>
                <h1 className='text-lg'>SGMG</h1>
                <div className='mt-4 text-gray-400'>
                    <p>Internship Full stack Developer</p>
                    <p className='text-sm mt-2'>
                        jan 2023 - June 2023
                    </p>
                </div>
            </div>
            <div>
                <h1 className='text-lg'>NowEdge</h1>
                <div className='mt-4 text-gray-400'>
                    <p>Frontend Developer</p>
                    <p className='text-sm mt-2'>
                        Aug 2022 - Dec 2022
                    </p>
                </div>
            </div>
            <div>
                <h1 className='text-lg'>Devaxy</h1>
                <div className='mt-4 text-gray-400'>
                    <p>
                        Internship Frontend Developer
                    </p>
                    <p className='text-sm mt-2'>
                        Apr 2022 - May 2022
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Feedback