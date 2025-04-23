import React from 'react'
import Link from 'next/link'

import { cn } from '@utils/shadcn';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}
export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={cn('w-full relative z-10', className)}
      {...props}
    >
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 py-10">
          <div className={cn('flex items-center space-x-4', 'ml-3')}>
            <p className="md:pr-10 text-md text-[var(--section-title)]">© 2025 M Class. All rights reserved.</p>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-md md:h-8 md:w-8 !cursor-pointer transition-colors p-1 relative z-20"
            >
              <img
                src="/static/common/twitter.svg"
                alt="Twitter"
                className="h-full w-full object-contain pointer-events-none"
              />
            </Link>
            <Link
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-md md:h-8 md:w-8 cursor-pointer transition-colors p-1 relative z-20"
            >
              <img
                src="/static/common/tg.svg"
                alt="tg"
                className="h-full w-full object-contain pointer-events-none"
              />
            </Link>
            <Link
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-md cursor-pointer md:h-8 md:w-8 transition-colors p-1 relative z-20"
            >
              <img
                src="/static/common/medium.svg"
                alt="Medium"
                className="h-full w-full object-contain pointer-events-none"
              />
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-md cursor-pointer md:h-8 md:w-8 transition-colors p-1 relative z-20"
            >
              <img
                src="/static/common/discord.svg"
                alt="Discord"
                className="h-full w-full object-contain pointer-events-none"
              />
            </Link>
          </div>
        </div>
    </footer>
  )
}
