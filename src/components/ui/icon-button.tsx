import { cn } from '@/lib/utils'
import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { type IconSvgElement } from '@hugeicons/react'
import { Icon } from './icon'

export default function IconButton({
  className,
  icon,
  label,
  ...props
}: ButtonPrimitive.Props & { icon: IconSvgElement; label?: string }) {
  return (
    <ButtonPrimitive
      data-slot='button'
      className={cn(
        'group relative flex items-center gap-1.5 rounded-full p-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/10 hover:text-accent focus-visible:text-accent',
        className,
      )}
      {...props}
    >
      <Icon
        icon={icon}
        className='transition-all group-hover:fill-accent/30 group-active:scale-90'
      />
      {label && <span>{label}</span>}
    </ButtonPrimitive>
  )
}
