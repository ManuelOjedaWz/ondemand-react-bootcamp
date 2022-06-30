import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutGrid from '../components/CheckoutGrid'
import { selectCart } from '../store/cartSlice'
import { Title } from '../styles/global'

export default function Checkout () {
  const { products } = useSelector(selectCart)

  return (
    <div>
      <Title>Checkout</Title>

      <CheckoutGrid />
    </div>
  )
}
