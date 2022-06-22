import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

const initialState = {
  data: {} as any,
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

export const getFeaturedProducts = (state: RootState) => state.featuredProducts

export const { setFeaturedProducts } = featuredProductsSlice.actions

export default featuredProductsSlice.reducer
