import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from '@utils/index';

const messageVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "bg-green-500 text-white hover:bg-green-500/90",
        warning: "bg-yellow-500 text-white hover:bg-yellow-500/90",
        info: "bg-blue-500 text-white hover:bg-blue-500/90",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {
  show?: boolean
  duration?: number
  onClose?: () => void
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, variant, size, show = true, duration = 3000, onClose, children, ...props }, ref) => {
    React.useEffect(() => {
      if (show && duration > 0) {
        const timer = setTimeout(() => {
          onClose?.()
        }, duration)
        return () => clearTimeout(timer)
      }
    }, [show, duration, onClose])

    if (!show) return null

    return (
      <div
        className={cn(
          "fixed top-4 right-4 z-50",
          "animate-in fade-in slide-in-from-right-4 duration-300"
        )}
      >
        <div
          ref={ref}
          className={cn(messageVariants({ variant, size, className }))}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  }
)
Message.displayName = "Message"

export { Message, messageVariants } 