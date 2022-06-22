import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

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

export const getProducts = (state: RootState) => state.products

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
