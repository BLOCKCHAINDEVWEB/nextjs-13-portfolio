'use client'

import React from 'react'
import { motion } from 'framer-motion'

import { textVariant2 } from '@/utils/motion'

type Props = {
  title: JSX.Element
  textStyles?: string
}

const TitleText = ({
  title,
  textStyles,
}: {
  title: JSX.Element
  textStyles?: string
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] ${textStyles}`}
  >
    {title}
  </motion.h2>
)

export default TitleText
