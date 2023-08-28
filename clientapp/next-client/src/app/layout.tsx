import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Visualizer',
  description: 'Next Visualizer from MongoDb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
     <Script src="dark-mode.js"></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}