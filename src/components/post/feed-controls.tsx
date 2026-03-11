import {
  ArrowUpDownIcon,
  SearchIcon,
  SlidersHorizontalIcon,
} from '@hugeicons/core-free-icons'
import Button from '../ui/button'
import { Icon } from '../ui/icon'
import Input from '../ui/input'

export default function FeedControls() {
  return (
    <div className='flex items-center justify-between gap-6 border-y border-border/50 px-4 py-3 md:px-8'>
      <div className='relative w-full max-w-sm'>
        <Input
          aria-label='Search'
          type='search'
          placeholder='Search...'
          className='peer ps-9'
        />
        <div className='peer pointer-events-none absolute inset-y-0 inset-s-0 flex items-center justify-center ps-2 text-muted-foreground/80 disabled:opacity-50'>
          <Icon icon={SearchIcon} />
        </div>
      </div>

      <div className='flex items-center gap-2 text-sm'>
        <Button size='sm' variant='outline' aria-label='Sort'>
          <Icon icon={ArrowUpDownIcon} />
          <span className='hidden md:inline-block'>Sort</span>
        </Button>
        <Button size='sm' variant='outline' aria-label='Filter'>
          <Icon icon={SlidersHorizontalIcon} />{' '}
          <span className='hidden md:inline-block'>Filter</span>
        </Button>
      </div>
    </div>
  )
}
