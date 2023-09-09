import type { Metadata } from 'next'
import '@/styles/globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Créer par Yannick Goalen',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  )
}
