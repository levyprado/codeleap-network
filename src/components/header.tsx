import { siteConfig } from '@/lib/constants'
import UserMenu from './user-menu'

export default function Header() {
  return (
    <header className='flex h-16 items-center justify-between gap-3 bg-brand px-6'>
      <h1 className='text-xl font-bold text-balance text-white md:text-2xl'>
        {siteConfig.name}
      </h1>

      <UserMenu />
    </header>
  )
}
