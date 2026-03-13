'use client'

import { useAuthStore } from '@/features/auth/auth-store'
import { Theme, useThemeStore } from '@/lib/theme-store'
import {
  ComputerPhoneSyncIcon,
  LogoutIcon,
  Moon02Icon,
  PaintBoardIcon,
  SunIcon,
} from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Icon from './ui/icon'

const themes: { value: Theme; label: string; icon: IconSvgElement }[] = [
  { value: 'light', label: 'Light', icon: SunIcon },
  { value: 'dark', label: 'Dark', icon: Moon02Icon },
  { value: 'system', label: 'System', icon: ComputerPhoneSyncIcon },
]

export default function UserMenu() {
  const { theme, setTheme } = useThemeStore()
  const { username, logout } = useAuthStore()
  const initial = username?.[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label='Open menu'
        className='flex size-9 items-center justify-center rounded-full bg-card font-bold text-accent uppercase transition-all outline-none focus-visible:border-foreground focus-visible:ring-3 focus-visible:ring-foreground/50'
      >
        {initial}
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuGroup>
          <DropdownMenuLabel className='pointer-events-none ml-0.5 text-accent'>
            @{username}
          </DropdownMenuLabel>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Icon icon={PaintBoardIcon} />
              Theme
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={theme}
                    onValueChange={setTheme}
                  >
                    {themes.map(({ value, label, icon }) => (
                      <DropdownMenuRadioItem key={value} value={value}>
                        <Icon icon={icon} />
                        {label}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout} variant='destructive'>
            <Icon icon={LogoutIcon} />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
