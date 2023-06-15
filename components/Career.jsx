import React from 'react'
import Link from 'next/link'

const Career = ({data}) => {
  return (
    <section className="text-gray-600 body-font">
        {
            data.map((career, index) => (
                <div className="container mx-auto flex md:px-24 px-12 py-24 md:flex-row flex-col items-center" key={index}>
                    <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font text-3xl mb-4 capitalize text-gray-900">
                            my career so far
                        </h1>
                        <p className="my-4 leading-relaxed md:w-96 text-gray-400">
                            {
                                career.career
                            }
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className='grid md:grid-cols-2 gap-5'>
                            {
                                career.skills.map((item, index) => (
                                    <div key={index} className="text-3xl text-gray-500 capitalize">
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default Career