'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { newFeaturesContent, newFeatures } from '@/constants'
import TypingText from '@/components/TypingText'
import TitleText from '@/components/TitleText'
import NewFeatures from '@/components/NewFeatures'
import { variants, staggerContainer, fadeIn } from '@/utils/motion'

export default function WhatsNew({ lang }: { lang: string }) {
  const { typingText, title } =
    lang === 'en' ? newFeaturesContent.en : newFeaturesContent.fr

  const newFeaturesTranslated = lang === 'en' ? newFeatures.en : newFeatures.fr

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title={typingText} />
          <TitleText title={<>{title}</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeaturesTranslated.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={variants('right')}
          className="flex-1 flex justify-center items-center"
        >
          <Link href="https://dashboard.feature.sh/" target="_blank">
            <Image
              src="/img/dashboard_capture.png"
              alt="get-started"
              className="w-[90%] h-[90%] object-contain"
              width={500}
              height={500}
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
