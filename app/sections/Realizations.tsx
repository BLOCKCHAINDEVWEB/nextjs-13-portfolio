'use client'

import { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import { staggerContainer, textVariant } from '@/utils/motion'
import TypingText from '@/components/TypingText'
import TitleText from '@/components/TitleText'
import RealizationsCard from '@/components/RealizationsCard'
import { realizationsContent, realizationsWebsite } from '@/constants'

export default function Realizations({ lang }: { lang: string }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === 'dark')
  }, [setIsDark, theme])

  const { typingText, title } =
    lang === 'en' ? realizationsContent.en : realizationsContent.fr

  const realizationsTranslated =
    lang === 'en' ? realizationsWebsite.en : realizationsWebsite.fr

  if (!mounted) return null

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title={typingText} textStyles="text-center" />
        <motion.div variants={textVariant(1.1)}>
          <TitleText title={<>{title}</>} textStyles="text-center" />
        </motion.div>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {realizationsTranslated.map((project, index) => (
            <RealizationsCard
              key={`realizations-${index}`}
              index={index}
              {...project}
              isDark={isDark}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
