import React, { useEffect } from 'react'
import useWalletAuth from '@/hooks/useWalletAuth'

import Login from './login'

export interface IIndexProps {}
const Index: React.FunctionComponent<IIndexProps> = (props) => {
  const {
    state: { isConnected, isAuthenticated },
  } = useWalletAuth({})

  if (isConnected && !isAuthenticated) {
    return <Login/>
  }

  return null
}

export default Index
