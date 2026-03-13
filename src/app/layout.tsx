import QueryProvider from '@/components/query-provider'
import ThemeProvider from '@/components/theme-provider'
import Icon from '@/components/ui/icon'
import AuthGuard from '@/features/auth/components/auth-guard'
import { siteConfig } from '@/lib/constants'
import {
  CancelCircleIcon,
  CheckmarkCircle01Icon,
  GithubIcon,
} from '@hugeicons/core-free-icons'
import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import { Toaster, ToasterProps } from 'sonner'
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

const toasterProps: ToasterProps = {
  position: 'bottom-center',
  visibleToasts: 1,
  offset: 36,
  mobileOffset: 32,
  duration: 2000,
  icons: {
    success: <Icon icon={CheckmarkCircle01Icon} size={20} />,
    error: <Icon icon={CancelCircleIcon} size={20} />,
  },
  toastOptions: {
    className:
      'font-sans! bg-card! px-5! text-foreground! border-2! border-border! text-base! shadow-lg!',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} relative isolate antialiased`}>
        <ThemeProvider />

        <div className='fixed inset-0 z-0 bg-brand-glow opacity-30' />

        <main className='relative grid min-h-dvh place-items-center overflow-hidden px-4'>
          <QueryProvider>
            <AuthGuard>{children}</AuthGuard>
          </QueryProvider>
        </main>

        <a
          href='https://github.com/levyprado/codeleap-challenge'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='View source on GitHub'
          className='fixed right-6 bottom-6 hidden size-11 items-center justify-center rounded-full border bg-card shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg lg:flex'
        >
          <Icon icon={GithubIcon} size={20} />
        </a>

        <Toaster {...toasterProps} />
      </body>
    </html>
  )
}
