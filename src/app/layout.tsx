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
        <div className='fixed inset-0 z-0 bg-brand-glow opacity-30' />

        <main className='relative grid min-h-dvh place-items-center px-4'>
          {children}
        </main>
      </body>
    </html>
  )
}
