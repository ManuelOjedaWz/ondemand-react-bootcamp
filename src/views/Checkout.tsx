import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutGrid from '../components/CheckoutGrid'
import { getCart } from '../store/cartSlice'
import { Title } from '../styles/global'

export default function Checkout () {
  const { products } = useSelector(getCart)

  return (
    <div>
      <Title>Checkout</Title>

      <CheckoutGrid />
    </div>
  )
}
