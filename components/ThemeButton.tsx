'use client'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeButton = ({
  theme,
  setTheme,
}: {
  theme: string | undefined
  setTheme: any
}) => (
  <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="flex items-center justify-center rounded-lg p-2 transition-colors duration-200 focus:outline-none"
    onClick={() => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }}
  >
    {theme === 'dark' ? (
      <SunIcon className="h-5 w-5 text-white" />
    ) : (
      <MoonIcon className="h-5 w-5 text-black" />
    )}
  </button>
)

export default ThemeButton
