import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categoriesSlice'
import bannersSlice from './bannersSlice'
import productsSlice from './productsSlice'
import featuredProductsSlice from './featuredProductsSlice'

export const store = configureStore({
  reducer: {
    banners: bannersSlice,
    categories: categoriesReducer,
    products: productsSlice,
    featuredProducts: featuredProductsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
