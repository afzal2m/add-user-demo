import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementAmount: (state, action) => {
      state.value -= action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, decrementAmount } = counterSlice.actions
// export const incrementAsync = (amount:number) => (dispatch:any) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state: any) => state.counter.value

export default counterSlice.reducer