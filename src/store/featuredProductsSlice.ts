import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
  isLoading: true
}

export const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState,
  reducers: {
    setFeaturedProducts: (state, { payload }) => {
      state.data = payload.data
      state.isLoading = payload.isLoading
    }
  }
})

export const { setFeaturedProducts } = featuredProductsSlice.actions

export default featuredProductsSlice.reducer
