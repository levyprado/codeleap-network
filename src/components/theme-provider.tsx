'use client'

import { useThemeStore } from '@/lib/theme-store'
import { useEffect } from 'react'

export default function ThemeProvider() {
  const { theme } = useThemeStore()

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')

      const apply = (dark: boolean) => root.classList.toggle('dark', dark)

      apply(mq.matches)
      mq.addEventListener('change', (e) => apply(e.matches))
      return () => mq.removeEventListener('change', (e) => apply(e.matches))
    }

    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return null
}
