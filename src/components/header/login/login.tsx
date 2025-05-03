import { FC, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useTranslations } from 'next-intl';
import { Spinner } from '@/components/ui/spinner';
import useWalletAuth from '@/hooks/useWalletAuth';

export interface LoginProps {}
const Login: FC<LoginProps> = () => {
  const { isConnecting, isReconnecting } = useAccount();
  const t = useTranslations('globals');
  const { actions: { onLogin, setIsAuthenticated }, state: { address } } = useWalletAuth();

  const onClickLogin = async () => {
    if (address) {
      onLogin({ address: address! });
    } else {
      console.log('no address');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return (
    <button
      onClick={onClickLogin}
      type="button"
      className="cursor-pointer bg-transparent border-1 border-primary/40 text-white font-sm py-2 px-4 rounded-full transition-colors"
    >
      <div className="flex flex-row items-center gap-3 justify-between">
        {isConnecting || isReconnecting ? (
          <Spinner size="sm" color="info" className="mr-1" />
        ) : null}
        Login
      </div>
    </button>
  );
};

export default Login;