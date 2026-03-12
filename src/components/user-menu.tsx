'use client'

import { useAuthStore } from '@/features/auth/auth-store'
import { LogoutIcon, SunIcon } from '@hugeicons/core-free-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Icon from './ui/icon'

export default function UserMenu() {
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
          <DropdownMenuItem>
            <Icon icon={SunIcon} />
            Toggle Theme
          </DropdownMenuItem>
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
