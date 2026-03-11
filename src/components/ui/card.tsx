import { cn } from '@/lib/utils'

export default function Card({
  children,
  className,
  title,
  ...props
}: React.ComponentProps<'div'> & { title: string }) {
  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-lg flex-col gap-6 rounded-xl border bg-card p-6 shadow-md',
        className,
      )}
      {...props}
    >
      <h2 className='text-2xl leading-tight font-medium text-balance'>
        {title}
      </h2>
      {children}
    </div>
  )
}
