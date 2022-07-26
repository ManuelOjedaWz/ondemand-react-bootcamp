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
  products: [] as Array<CartProduct>,
  total: 0 as number|string
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart (state, { payload }) {
      const alreadyInCart = state.products.findIndex((product) => product?.id === payload.id)

      if (alreadyInCart >= 0) {
        const ammount = payload.ammount ? payload.ammount : 0
        state.products[alreadyInCart].ammount = parseInt(ammount)
        return
      }

      state.products.push(payload)
    },
    removeProductFromCart (state, { payload }) {
      state.products = state.products.filter((product) => product.id !== payload.id)
    },
    calculateTotal (state) {
      const total = state.products.reduce((prevValue, product) => prevValue + (product.ammount * product.price), 0)
      state.total = total.toFixed(2)
    },
    clearCart (state) {
      state.products = []
    }
  }
})

export const selectCart = (state: RootState) => state.cart

export const { addToCart, removeProductFromCart, calculateTotal, clearCart } = cartSlice.actions

export default cartSlice.reducer
