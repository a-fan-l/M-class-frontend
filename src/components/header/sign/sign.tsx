import { FC, useCallback } from 'react';
import { useAccount } from 'wagmi';

import { useTranslations } from 'next-intl';
import { Spinner } from '@/components/ui/spinner';
import useWalletAuth from '@/hooks/useWalletAuth';

export interface SignedProps {}
const Signed: FC<SignedProps> = () => {
    const { isConnecting, isReconnecting } = useAccount()
    const t = useTranslations('globals');
    const { actions: { onLogin   }, state: { address } } = useWalletAuth();

    const onClick = () => {
        onLogin({ address: address as string })
    }

    return(
        <button
            onClick={onClick}
            type="button"
            className="cursor-pointer bg-transparent border-1 border-primary/40 text-white font-sm py-2 px-4 rounded-full transition-colors"
        >
            <div className="flex flex-row items-center gap-3 justify-between">
                {isConnecting || isReconnecting ? (
                    <Spinner size="sm" color="info" className="mr-1" />
                ) : null}
                Signin
            </div>
        </button>
    )
};

export default Signed;