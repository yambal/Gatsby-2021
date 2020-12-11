import { Box, SystemProps } from '@xstyled/styled-components'
import React from 'react'
import { Button } from '../Buttons/Button'

/**
 * Redux サンプル Counter の プレゼンテーショナルコンポーネント
 * ビューのみであることが重要（Storeと疎結合であること）
 **/
export type CounterProps = SystemProps & {
  count: number,
  add : () => void
}

export function Counter({count, add, ...wrapperProps} : CounterProps) {

  return (
    <Box {...wrapperProps}>
      <Box>{count}</Box>
      <Button onClick={add}>+1</Button>
    </Box>
  )
}