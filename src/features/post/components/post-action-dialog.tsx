'use client'

import Icon from '@/components/ui/icon'
import { Dialog } from '@base-ui/react/dialog'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import type { IconSvgElement } from '@hugeicons/react'

type PostActionDialogProps = {
  triggerIcon: IconSvgElement
  triggerLabel: string
  title: string
  children: React.ReactNode
}

export default function PostActionDialog({
  triggerIcon,
  triggerLabel,
  title,
  children,
}: PostActionDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label={triggerLabel}
        className='rounded-lg p-2.5 text-white transition-all outline-none hover:bg-white/10 focus-visible:border-white focus-visible:ring-3 focus-visible:ring-white/50'
      >
        <Icon icon={triggerIcon} className='md:size-5' />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop className='fixed inset-0 min-h-dvh bg-black opacity-20 transition-all duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute dark:opacity-70' />
        <Dialog.Popup className='fixed bottom-0 left-0 w-full rounded-t-xl bg-card p-6 shadow-xl transition-all duration-200 ease-out data-ending-style:translate-y-full data-ending-style:opacity-0 data-starting-style:translate-y-full data-starting-style:opacity-0 md:top-1/2 md:bottom-auto md:left-1/2 md:max-w-xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-xl data-ending-style:md:-translate-y-1/2 data-ending-style:md:scale-95 data-starting-style:md:-translate-y-1/2 data-starting-style:md:scale-95'>
          <div className='mb-6 flex items-center justify-between gap-3'>
            <Dialog.Title className='text-xl font-medium md:text-2xl'>
              {title}
            </Dialog.Title>
            <Dialog.Close
              aria-label='Close'
              className='flex shrink-0 items-center justify-center rounded-xl p-2.5 transition-all outline-none select-none hover:bg-foreground/5 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]'
            >
              <Icon icon={Cancel01Icon} size={20} />
            </Dialog.Close>
          </div>

          {children}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
