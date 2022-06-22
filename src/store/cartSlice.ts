import { createSlice, current } from '@reduxjs/toolkit'
import { RootState } from '.'
import Product from '../interfaces/Product'

export interface CartProduct {
  product: Product|null;
  ammount: number;
}

const initialState = {
  products: [] as Array<CartProduct>
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      const alreadyInCart = state.products.find(({ product }) => product?.id === payload.product.id)

      if (alreadyInCart) {
        const index = state.products.indexOf(alreadyInCart)
        state.products[index].ammount = parseInt(payload.ammount)
        return
      }

      state.products.push(payload)
    },
    removeItemFromCart: (state, { payload }) => {
      state.products = state.products.filter(({ product }) => product?.id !== payload.product.id)
    }
  }
})

export const getCart = (state: RootState) => state.cart

export const { setCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer
