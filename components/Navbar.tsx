'use client'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import { navVariants } from '@/utils/motion'
import ThemeButton from './ThemeButton'
import SocialAssets from './SocialAssets'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === 'dark')
  }, [setIsDark, theme])

  const pathname = usePathname()
  const href = pathname === '/en' ? '/fr' : '/en'

  if (!mounted) return null

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
        <SocialAssets isDark={isDark} />
        <div className="flex gap-4 rounded-lg">
          <div
            className={`${
              isDark ? 'text-white' : 'text-black'
            } font-bold mt-2 ml-5`}
          >
            {href === '/en' ? (
              <Link href="/en">en</Link>
            ) : (
              <Link href="/fr">fr</Link>
            )}
          </div>
          <ThemeButton theme={theme} setTheme={setTheme} />
          <div className="flex items-center gap-2 rounded-lg cursor-pointer mr-4">
            <Link href="https://github.com/BLOCKCHAINDEVWEB/nextjs-13-portfolio">
              <div className="flex justify-between">
                <span className="text-black dark:text-white font-bold pr-1">
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
    </motion.nav>
  )
}
