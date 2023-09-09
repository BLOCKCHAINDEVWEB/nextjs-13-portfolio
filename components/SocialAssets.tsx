import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SocialAssets = ({ isDark }: { isDark: boolean }) => (
  <div className="flex gap-4 rounded-lg p-2 z-10">
    <Link href="https://www.linkedin.com/in/y-goalen/">
      <Image
        src={
          isDark
            ? '/img/logos/linkedin-white.svg'
            : '/img/logos/linkedin-black.svg'
        }
        alt="linkedin"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
        width={24}
        height={24}
      />
    </Link>
    <Link href="https://github.com/BLOCKCHAINDEVWEB">
      <Image
        src={
          isDark
            ? '/img/logos/github-logo-white.svg'
            : '/img/logos/github-logo-black.svg'
        }
        alt="linkedin"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
        width={24}
        height={24}
      />
    </Link>
    <Link href="mailto:y.goalen@gmail.com">
      <Image
        src={isDark ? '/img/icons/at-white.png' : '/img/icons/at-black.png'}
        alt="at"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
        width={24}
        height={24}
      />
    </Link>
  </div>
)

export default SocialAssets
