import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Contact = ({data}) => {
  return (
    <section className='bg-gray-200 py-24 px-5' id='contact'>
        <div className='container mx-auto px-8'>
            <div>
                <h1 className='font-semibold text-3xl'>
                    Want to get in touch?
                    <br/>
                    Drop me a line!
                </h1>
                <p className='mt-2 text-gray-400'>
                    message me, i will answer as fast as possible.
                </p>
            </div>
            <form className='mt-10' action="">
                <div className='flex md:flex-row flex-col gap-10'>
                    <div className='flex flex-col gap-3 md:w-[400px]'>
                        <label htmlFor="name" className='uppercase text-sm font-sans'>
                            full name
                        </label>
                        <input type="text" disabled id='name' className='p-2 border pl-4 outline-none border-gray-300 placeholder:text-gray-300 ' placeholder='Enter your name' />
                    </div>
                    <div className='flex flex-col gap-3 md:w-[400px]'>
                        <label htmlFor="email" className='uppercase text-sm font-sans'>
                            email
                        </label>
                        <input type="email" disabled id='email' className='p-2 pl-4 border outline-none border-gray-300 placeholder:text-gray-300' placeholder='Enter your email' />
                    </div>
                </div>
                <div className='flex gap-3 flex-col lg:w-[840px] mt-7'>
                    <label htmlFor="email" className='uppercase text-sm font-sans'>
                        message
                    </label>
                    <textarea disabled type="email" id='email' className='p-2 pl-4 h-64 border outline-none border-gray-300 placeholder:text-gray-300 ' placeholder='Enter your email' />
                </div>
                <button disabled className='bg-black text-white px-8 py-3 uppercase tracking-wider text-sm mt-10'>
                    Submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact