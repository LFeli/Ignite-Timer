import { cn } from '@/lib/utils'

const STATUS_COLOR = {
  suspended: 'before:bg-red-500',
  inProgress: 'before:bg-yellow-500',
  completed: 'before:bg-green-500',
} as const

interface StatusProps {
  statusColor: 'inProgress' | 'suspended' | 'completed'
  className?: string
  children?: React.ReactNode
}

export function Status({ className, children, statusColor }: StatusProps) {
  return (
    <span
      className={cn(
        'flex items-center gap-2 before:content-normal before:w-3 before:h-3 before:rounded-full',
        STATUS_COLOR[statusColor],
        className,
      )}
    >
      {children}
    </span>
  )
}
