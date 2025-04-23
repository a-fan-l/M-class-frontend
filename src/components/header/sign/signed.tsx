import React from 'react'
import { cn } from '@utils/index'
import { Loader2 } from 'lucide-react'

interface SignedProps extends React.HTMLAttributes<HTMLDivElement> {}
export function Signed({ className, ...props }: SignedProps) {
  return (
    <div
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full',
        'bg-primary text-primary-foreground',
        className,
      )}
      {...props}
    >
      <Loader2 className="h-5 w-5" />
    </div>
  )
}
