'use client'

import { motion } from 'framer-motion'

import { staggerContainer, textVariant } from '@/utils/motion'

export default function Hero() {
  return (
    <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row w-[95%] justify-center items-center mr-20"
          >
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase mr-3">
              P
            </h1>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-black dark:border-white sm:mr-0 lg:mb-[-50px] sm:ml-0.5 md:mb-[-32px] sm:mb-[-20px] ml-0.5 mr-0 mb-[-10px]" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase mx-[1Opx]">
              rtf
            </h1>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-black dark:border-white sm:mr-0 lg:mb-[-50px] sm:ml-0.5 md:mb-[-32px] sm:mb-[-20px] ml-0.5 mr-0 mb-[-10px]" />
            <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase">
              li
            </h1>
            <div className="lg:w-[280px] md:w-[180px] sm:w-[100px] w-[80px] lg:h-[70px] md:h-[50px] sm:h-[32px] h-[24px] lg:border-[22px] md:border-[16px] sm:border-[9px] border-[7px] rounded-full border-black dark:border-white sm:mr-0 lg:mb-[-50px] sm:ml-0.5 md:mb-[-32px] sm:mb-[-20px] ml-0.5 mr-0 mb-[-10px]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
