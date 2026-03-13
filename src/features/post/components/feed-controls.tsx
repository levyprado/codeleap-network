import Button from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import Input from '@/components/ui/input'
import { ArrowUpDownIcon, SearchIcon } from '@hugeicons/core-free-icons'

export default function FeedControls() {
  return (
    <div className='flex items-center justify-between gap-6 border-y border-border/50 px-4 py-3 md:px-8'>
      <div className='relative w-full max-w-xs'>
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
      </div>
    </div>
  )
}
