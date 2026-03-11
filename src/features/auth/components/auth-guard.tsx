'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthStore } from '../auth-store'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { username } = useAuthStore()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    console.log(username)
    const isAuthenticated = !!username
    const isSignupPage = pathname === '/signup'

    if (!isAuthenticated && !isSignupPage) {
      router.replace('/signup')
    }

    if (isAuthenticated && isSignupPage) {
      router.replace('/')
    }
  }, [pathname, router, username])

  return <>{children}</>
}
