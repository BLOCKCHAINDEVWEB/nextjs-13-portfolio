'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

import { fadeIn } from '@/utils/motion'

const TasksCard = ({
  index,
  name,
  description,
  imgFile,
  logo_link,
  logo_img,
  source_img_link,
}: {
  index: number
  name: string
  description: string
  imgFile: string
  logo_link: string
  logo_img: string
  source_img_link: string
}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className="flex-container w-full md:w-1/2 lg:w-1/3 px-2 mb-4"
  >
    <div className="relative h-[230px] sm:h-[330px]">
      <Link href={`/tasks/${index}`} passHref>
        <Image
          src={`/img/${imgFile}`}
          alt="project tasks image"
          className="w-full h-full object-contain rounded-xl"
          width={500}
          height={500}
        />
      </Link>
    </div>

    <div className="mt-5">
      <div className="flex justify-start">
        <div className="mr-2 mt-1">
          <Link href={logo_link} passHref>
            <Image
              src={`/img/logos/${logo_img}`}
              className="rounded-full"
              alt={name}
              width={30}
              height={30}
            />
          </Link>
        </div>
        <h3 className="text-black dark:text-white font-bold text-[24px]">
          {name}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        {source_img_link && (
          <Link href={source_img_link} passHref>
            <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-500" />
          </Link>
        )}
      </div>
    </div>
  </motion.div>
)

export default TasksCard
