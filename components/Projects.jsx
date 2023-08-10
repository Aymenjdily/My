import React from 'react'
import ProjectCard from './ProjectCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Projects = ({data}) => {
  return (
    <div className='overflow-hidden px-8 pb-12 md:py-24' id='projects'>
      <div className='py-[100px]'>
        <Splide
          options={{
            autoplay:true,
            interval:2000,
            resetProgress: true,
            pagination: false,
            arrows: false,
            drag: false,
            type: 'loop',
            perPage:1.5,
            rewindSpeed:5000,
            gap:"50px"
          }}
        >
          <SplideSlide className='lg:text-[124px] md:text-[70px] text-[50px] text-black lg:leading-[170px] font-bold'>
            Featured Work
          </SplideSlide>
          <SplideSlide className='lg:text-[124px] md:text-[70px] text-[50px] text-black lg:leading-[170px] font-bold'>
            Featured Work
          </SplideSlide>
          <SplideSlide className='lg:text-[124px] md:text-[70px] text-[50px] text-black lg:leading-[170px] font-bold'>
            Featured Work
          </SplideSlide>
        </Splide>
      </div>
      <div className='flex flex-col gap-20'>    
        {
          data.map((project, index) => (
            <ProjectCard key={index} index={index} data={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects