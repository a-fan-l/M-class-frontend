import React from 'react'
import useAppAccount from '@hooks/function/useAppAccount'

import Sign from './sign'

export interface IIndexProps {}
const Index: React.FunctionComponent<IIndexProps> = (props) => {
  const {
    state: { isWalletLogined },
  } = useAppAccount({})

  if (isWalletLogined) {
    return null
  }
  return <Sign className="toolbar-sign" />
}

export default Index
