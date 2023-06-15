/* eslint-disable react/no-unescaped-entities */
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
                <div className="container mx-auto gap-10 flex md:px-24 px-12 py-24 md:flex-row flex-col items-center" key={index}>
                    
                    <div className=" flex flex-col md:items-start md:text-left items-center text-center relative z-[5]">
                        <h1 className="title-font text-gray-400 uppercase">
                            Hey there !
                        </h1>
                        <h1 className='my-5 font-bold text-3xl'>
                            I'm Aymen Jdily
                        </h1>
                        <p className="text-gray-500 leading-relaxed md:w-96">
                            {profile.overview}
                        </p>
                    </div>
                    <div
                        className=" w-full h-96 mb-10 md:mb-0 relative"
                    >
                        <div className='absolute z-[0] w-[100%] h-[50%] top-0 blue__gradient'/>
                        <div className='absolute z-[0] w-[100%] h-[100%] right-20 bottom-20 blue__gradient'/>
                        <Image fill className="h-full object-cover z-[2]" alt="hero" src={urlFor(profile.profileImage).url()} />
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default Profile