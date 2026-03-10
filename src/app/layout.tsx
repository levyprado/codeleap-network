import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter_Tight({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CodeLeap Frontend Test',
  description: 'Hands-on project for CodeLeap Frontend Developer position.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} relative isolate antialiased`}>
        {children}
      </body>
    </html>
  )
}
