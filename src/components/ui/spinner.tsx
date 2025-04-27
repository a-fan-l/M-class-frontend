import { cn } from '@utils/shadcn';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "info"
}

export function Spinner({ className, size = "md", color = "primary", ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        {
          "h-4 w-4": size === "sm",
          "h-6 w-6": size === "md",
          "h-8 w-8": size === "lg",
          "text-primary": color === "primary",
          "text-blue-500": color === "info",
        },
        className
      )}
      {...props}
    />
  )
} 