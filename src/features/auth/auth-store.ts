import { toast } from 'sonner'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthState = {
  username: string | null
  login: (username: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      login: (username) => {
        set({ username })
        toast.success(`Logged in as @${username}`)
      },
      logout: () => {
        set({ username: null })
        toast.success('Logged out')
      },
    }),
    { name: 'auth-store' },
  ),
)
