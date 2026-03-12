import QueryProvider from '@/components/query-provider'
import AuthGuard from '@/features/auth/components/auth-guard'
import { siteConfig } from '@/lib/constants'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const inter = Inter_Tight({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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

        <main className='relative grid min-h-dvh place-items-center overflow-hidden px-4'>
          <QueryProvider>
            <AuthGuard>{children}</AuthGuard>
          </QueryProvider>
        </main>
      </body>
    </html>
  )
}
