import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPostDate(createdAt: string): string {
  const now = new Date()
  const postDate = new Date(createdAt)
  const secondsAgo = Math.round((now.getTime() - postDate.getTime()) / 1000)

  const MINUTE = 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24

  if (secondsAgo < DAY) {
    let dateStr = ''
    if (secondsAgo < MINUTE) {
      dateStr += `${secondsAgo}s`
    } else if (secondsAgo < HOUR) {
      dateStr += `${Math.floor(secondsAgo / MINUTE)}m`
    } else {
      dateStr += `${Math.floor(secondsAgo / HOUR)}h`
    }
    return `${dateStr} ago`
  }

  const isDifferentYear = now.getFullYear() !== postDate.getFullYear()

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: isDifferentYear ? 'numeric' : undefined,
  }).format(postDate)
}
