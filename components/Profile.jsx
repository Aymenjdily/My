import React from 'react'
import Image from 'next/image'
import { urlFor } from '../sanity'

const Profile = ({data}) => {
  return (
    <section 
        className="text-gray-600 body-font"
    >
        {
            data.map((profile, index) => (
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" key={index}>
                    <div
                        className="md:w-96 w-full h-96 mb-10 md:mb-0 relative"
                    >
                        <div className='absolute z-[0] w-[100%] h-[50%] top-0 orange__gradient'/>
                        <div className='absolute z-[1] w-[100%] h-[100%] rounded-full bottom-40 white__gradient'/>
                        <div className='absolute z-[0] w-[100%] h-[100%] right-20 bottom-20 blue__gradient'/>
                        <Image fill className="object-cover object-center rounded-full z-[2] shadow-lg" alt="hero" src={urlFor(profile.profileImage).url()} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center relative z-[5]">
                        <h1 className="title-font md:text-7xl text-3xl mb-4 font-bold text-gray-900">
                            Hi there !
                        </h1>
                        <p className="text-xl leading-relaxed">
                            {profile.overview}
                        </p>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default Profile