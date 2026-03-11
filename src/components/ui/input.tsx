import { cn } from '@/lib/utils'
import { Input as InputPrimitive } from '@base-ui/react/input'

export default function Input({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <InputPrimitive
      type={type}
      data-slot='input'
      className={cn(
        'h-9 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base shadow-sm transition-all outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 dark:bg-input/30',
        className,
      )}
      {...props}
    />
  )
}
