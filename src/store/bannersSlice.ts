import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
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

export const { setBanners } = bannersSlice.actions

export default bannersSlice.reducer
