import * as React from 'react'

import { cn } from '@/lib/utils'

export default function Textarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'flex field-sizing-content max-h-32 min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 shadow-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 dark:bg-input/30 dark:disabled:bg-input/80',
        className,
      )}
      {...props}
    />
  )
}
