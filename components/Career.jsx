import React from 'react'

const Career = ({data}) => {
  return (
    <section className="text-gray-600 body-font">
        {
            data.map((career, index) => (
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" key={index}>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font md:text-5xl text-3xl mb-4 font-bold capitalize text-gray-900">
                            my <span className='bg-secondary px-2'>career</span> so far
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            {
                                career.career
                            }
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <div className='grid md:grid-cols-3 grid-cols-2 gap-5'>
                            {
                                career.skills.map((item, index) => (
                                    <div key={index} className=" py-2 border rounded-lg shadow-lg uppercase border-gray-400 text-center">
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