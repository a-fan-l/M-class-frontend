import React from 'react'
import useWalletAuth from '@/hooks/useWalletAuth'

import Login from './login'
import Logined from './logined'

export interface IIndexProps {}
const Index: React.FunctionComponent<IIndexProps> = (props) => {
  const {
    state: { isConnected, isAuthenticated },
  } = useWalletAuth({})

  console.log('9090909isConnected', isConnected, isAuthenticated, 'isAuthenticated')
  if (isConnected && !isAuthenticated) {
    return <Login/>
  }
  if(isConnected && isAuthenticated) {
    return <Logined/>
  }
  return null
}

export default Index
