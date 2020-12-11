/**
 * Redux Toolkit を使用した State 管理のサンプル
 * Slice
 * https://redux-toolkit.js.org/
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add(state, action: PayloadAction<{ addNumber: number }>) {
      state.count += action.payload.addNumber
    }
  }
})

export const counSelector = (state: RootState) => state.counter.count