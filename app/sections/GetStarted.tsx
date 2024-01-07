'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { useQRCode } from 'next-qrcode'

import { getStartedContent, startingFeatures } from '@/constants'
import TypingText from '@/components/TypingText'
import TitleText from '@/components/TitleText'

import StartSteps from '@/components/StartSteps'
import { staggerContainer, fadeIn } from '@/utils/motion'

export default function GetStarted({ lang }: { lang: string }) {
  const { Canvas } = useQRCode()

  const { typingText, title, linkText } =
    lang === 'en' ? getStartedContent.en : getStartedContent.fr

  const startingFeaturesTranslate =
    lang === 'en' ? startingFeatures.en : startingFeatures.fr

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="lg:w-[70%] w-[100%] mx-auto flex lg:flex-row flex-col gap-8"
      >
        <Image
          src="/img/photo-identité_280w.webp"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain rounded-lg"
          width={500}
          height={500}
          priority={true}
        />
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={typingText} />
          <TitleText title={<>{title}</>} />
          <div className="mt-[31px] flex flex-col max-w-[470px] gap-[24px]">
            {startingFeaturesTranslate.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                {linkText}
                <a
                  href="https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf"
                  className="cv-icon"
                  title="Web and Mobile Web Developer Resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-500" />
                </a>
              </div>
              <a
                href="https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf"
                className="cv-icon"
                title="Web and Mobile Web Developer Resume"
                target="_blank"
                rel="noreferrer"
              >
                <Canvas
                  text={
                    'https://storage.googleapis.com/cv-pwahost/CV_DEV_Y.Goalen.pdf'
                  }
                  options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 4,
                    width: 120,
                    color: {
                      dark: '#FFF',
                      light: '#000',
                    },
                  }}
                />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
