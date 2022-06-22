import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

const initialState = {
  data: {} as any,
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

export const getCategories = (state: RootState) => state.categories

export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer
