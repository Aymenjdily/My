import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Socials } from "../constants";
import Image from "next/image";
import { container, item } from "../utils/motion";
// import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="container mx-auto px-10 py-6 ">
      <div className="flex flex-col items-start pb-5">
        <Link href="/" className="flex items-center gap-[10px] mb-[30px]">
          {/* <h1 className='text-[35px] font-lilita'>
                    Code with Aymen
                </h1> */}
          <Image src="/logo.png" alt="logo" width={150} height={0} />
        </Link>
        <div className="py-[60px] flex justify-between w-full md:flex-row flex-col gap-[30px] border-y ">
          <div className="flex-1 flex flex-col gap-[30px]">
            <p className="text-gray-400 text-[23px] font-[500]">
              Passionate web developer transforming ideas into captivating
              digital experiences with creativity and functionality. Committed
              to delivering high-quality solutions through innovation.
            </p>
            {/* <motion.div
              variants={container}
              whileInView="visible"
              initial="hidden"
              className="flex gap-[12px] items-center"
            >
              {Socials.map((social) => (
                <motion.div
                  variants={item}
                  key={social.alt}
                  className="border border-gray-300 p-3 rounded-full hover:bg-primary duration-200"
                >
                  <Link href={social.link}>
                    <Image
                      src={social.image}
                      alt={social.alt}
                      width={20}
                      height={20}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div> */}
          </div>
          <div className="flex-1 flex flex-col gap-[22px] justify-center md:items-end md:text-left">
            <span className="text-gray-400 text-[20px] font-[500]">
              Casablanca, Morocco
            </span>
            <span className="text-gray-400 text-[20px] font-[500]">
            Adammb177@gmail.com            </span>
            <span className="text-gray-400 text-[20px] font-[500]">
            +212704183716
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
