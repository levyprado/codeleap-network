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
import { Icon } from './ui/icon'

export default function UserMenu() {
  const username = 'levyprado'
  const initial = username[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex size-9 items-center justify-center rounded-full bg-card font-bold text-accent uppercase'>
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
          <DropdownMenuItem variant='destructive'>
            <Icon icon={LogoutIcon} />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
