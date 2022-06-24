import { createSlice, current } from '@reduxjs/toolkit'
import { RootState } from '.'
import Product from '../interfaces/Product'

export interface CartProduct {
  id?: string;
  sku?: string;
  name?: string;
  mainimage: {
    alt: string;
    copyright?: string;
    dimensions: {
      height: number;
      weight: number;
    };
    url: string;
  };
  price: number;
  stock: number;
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
      const alreadyInCart = state.products.find((product) => product?.id === payload.id)

      if (alreadyInCart) {
        const index = state.products.indexOf(alreadyInCart)
        state.products[index].ammount = parseInt(payload.ammount)
        return
      }

      state.products.push(payload)
    },
    removeItemFromCart: (state, { payload }) => {
      state.products = state.products.filter((product) => product.id !== payload.id)
    }
  }
})

export const getCart = (state: RootState) => state.cart

export const { setCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer
