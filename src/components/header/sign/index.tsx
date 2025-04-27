import React from 'react'
import useWalletAuth from '@/hooks/useWalletAuth'

import Sign from './sign'

export interface IIndexProps {}
const Index: React.FunctionComponent<IIndexProps> = (props) => {
  const {
    state: { isConnected },
  } = useWalletAuth({})

  console.log('isConnected', isConnected)
  if (isConnected) {
    return <Sign/>
  }
  return null
}

export default Index
