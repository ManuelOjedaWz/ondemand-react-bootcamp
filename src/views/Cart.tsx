import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartTable from '../components/CartTable'
import { selectCart } from '../store/cartSlice'
import { Button, Table } from '../styles/global'

export default function Cart () {
  const { products } = useSelector(selectCart)

  return (
    <div data-testid='cart-page'>
      <h1>Shopping Cart</h1>

      <CartTable products={products} />

      <Link to='/checkout'>
        <Button disabled={products.length === 0}>
          Checkout
        </Button>
      </Link>
    </div>
  )
}
