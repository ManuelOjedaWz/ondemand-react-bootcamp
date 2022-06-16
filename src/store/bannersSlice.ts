import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

const initialState = {
  data: {} as any,
  isLoading: true
}

export const bannersSlice = createSlice({
  name: 'banners',
  initialState,
  reducers: {
    setBanners: (state, { payload }) => {
      state.data = payload.data
      state.isLoading = payload.isLoading
    }
  }
})

export const getBanners = (state: RootState) => state.banners

export const { setBanners } = bannersSlice.actions

export default bannersSlice.reducer
