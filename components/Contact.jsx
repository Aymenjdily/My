import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Contact = ({data}) => {
  return (
    <section className='container py-24 mx-auto px-5' id='contact'>
        <div className='flex md:flex-row flex-col md:text-start text-center p-12 border-4 border-black rounded-2xl shadow-lg'>
            <div className='flex-1 md:mb-0 mb-8'>
                <h1 className='md:text-5xl text-3xl md:mb-8 mb-4 font-bold'>
                    Want to get in touch ?
                </h1>
                <p className='md:text-2xl'>
                    aymenjdily@gmail.com
                </p>
            </div>
            <div
                className='flex flex-wrap flex-1 gap-5 items-center justify-center'>
                {
                    data.map((social, index) => (
                        <SocialIcon 
                            key={index}
                            url={social.url}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Contact