import React from 'react'
import { useAccount } from 'wagmi'
import { Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { cn } from '@utils/shadcn'
import { Button } from '@/components/ui/button'
import useBreakpoints from '@hooks/system/useBreakpoints'
import useAppAccount from '@hooks/function/useAppAccount'

interface SignProps extends React.HTMLAttributes<HTMLButtonElement> {}
const Sign = ({ className, ...props }: SignProps) => {
  const t = useTranslations("globals")
  // const { isConnecting, isReconnecting } = useAccount()
  const { upmd } = useBreakpoints()
  const {
    onSigned,
    state: { address },
  } = useAppAccount({})

  const onClick = () => {
    onSigned({ address })
  }

  return upmd ? (
    <Button
      onClick={onClick}
      className={cn(
        'h-9 rounded-full px-4 text-sm font-bold',
        'flex items-center justify-center gap-2',
        className,
      )}
      variant="outline"
      {...props}
    >
      {/* {isConnecting || isReconnecting ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : null} */}
      {t('btn.sign')}
    </Button>
  ) : (
    <Button
      onClick={onClick}
      className={cn('h-9 w-9 rounded-full p-0', className)}
      variant="outline"
      {...props}
    >
      <Loader2 className="h-5 w-5" />
    </Button>
  )
}

export default Sign