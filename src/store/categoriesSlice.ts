import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
  isLoading: true
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.data = payload.data
      state.isLoading = payload.isLoading
    }
  }
})

export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
