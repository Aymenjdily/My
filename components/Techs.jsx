import { motion } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress, SiNestjs, SiTailwindcss, SiMongodb, SiVercel } from "react-icons/si"

const Techs = () => {
  return (
    <section className='container mx-auto py-12 px-10 overflow-hidden'>
        <motion.h1 initial={{ opacity:0, scale:0.8 }} whileInView={{ opacity:1, scale:1 }} transition={{ duration:0.5 }} className='lg:text-[124px] md:text-[100px] text-[50px] font-bold'>
            My Techs
        </motion.h1>
        <div className="mt-12 flex items-center flex-wrap gap-10">
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <FaReact className="text-[80px]" />
            </div>
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <TbBrandNextjs className="text-[80px]" />
            </div>
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <FaNodeJs className="text-[80px]" />
            </div>
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <SiExpress className="text-[80px]" />
            </div>
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <SiNestjs className="text-[80px]" />
            </div>
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <SiTailwindcss className="text-[80px]" />
            </div>
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <SiMongodb className="text-[80px]" />
            </div>
            <div className='border border-gray-300 p-3 rounded-full animate-pulse hover:bg-primary duration-200'>
                <SiVercel className="text-[80px]" />
            </div>
        </div>
    </section>
  )
}

export default Techs