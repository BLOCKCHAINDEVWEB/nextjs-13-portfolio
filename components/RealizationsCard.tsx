'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

import { fadeIn } from '@/utils/motion'

export default function RealizationsCard({
  index,
  imgFile,
  title,
  subtitle,
  href,
  tags,
  isDark,
}: {
  index: number
  imgFile: string
  title: string
  subtitle: string
  href: string
  tags: string[]
  isDark: boolean
}) {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-4"
    >
      <Link href={href}>
        <Image
          src={`/img/${imgFile}`}
          alt={title}
          className="w-full rounded-3xl"
          width={250}
          height={250}
        />
      </Link>

      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px]">{title}</h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {subtitle}
          </p>
          <div className="flex justify-between">
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={`realizations-${tag}`} className={`text-[14px]`}>
                  #{tag}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-lg cursor-pointer  mt-4 mr-6">
              <Link href="/">
                <div className="flex">
                  <span className="text-black dark:text-white font-bold mr-2">
                    Repo
                  </span>
                  <Image
                    src={
                      isDark
                        ? '/img/logos/github-logo-white.svg'
                        : '/img/logos/github-logo-black.svg'
                    }
                    alt="github"
                    className="w-[24px] h-[24px] block"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Link href={href}>
          <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-black dark:border-slate-50">
            <Image
              src={
                isDark
                  ? '/img/icons/arrow-white.svg'
                  : '/img/icons/arrow-black.svg'
              }
              alt="arrow"
              className="w-[40%] h-[40%] object-contain"
              width={250}
              height={250}
            />
          </div>
        </Link>
      </div>
    </motion.div>
  )
}
