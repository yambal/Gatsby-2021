import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/store'
import { counterSlice } from './counterSlice'
import {
  counSelector
} from './counterSlice'
import { Counter } from '../../components/organisms/Counter'

/**
 * Redux サンプル Counter の コンテナールコンポーネント
 * ここはビューとStoreの連結のみ
 * - ビジネスロジックとビューを、分離して開発できる、別々に更新できる
 * - 責務の分離
 **/

export function CounterContainer() {
  const dispatch = useAppDispatch()
  const count = useSelector(counSelector)

  const addCount = useCallback(
    () => {
      dispatch( counterSlice.actions.add({ addNumber: 1 }) )
    },
    [dispatch]
  )

  return(
    <Counter count={count} add={addCount} />
  )
}

