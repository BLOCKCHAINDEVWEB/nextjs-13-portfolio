'use client'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { footerContents } from '@/constants'
import { footerVariants } from '@/utils/motion'
import SocialAssets from './SocialAssets'

export default function Footer({ lang }: { lang: string }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === 'dark')
  }, [setIsDark, theme])

  const { copyright } = lang === 'en' ? footerContents.en : footerContents.fr

  if (!mounted) return null

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="footer-gradient z-0" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px]">Portfolio</h4>
            <p className="font-normal text-[14px] opacity-50">{copyright}</p>

            <div className="flex gap-4 rounded-lg p-2 z-10">
              <SocialAssets isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
