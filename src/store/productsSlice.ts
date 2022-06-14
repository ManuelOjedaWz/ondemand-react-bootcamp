import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
  isLoading: true
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.data = payload.data
      state.isLoading = payload.isLoading
    }
  }
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
