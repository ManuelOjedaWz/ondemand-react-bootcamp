import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from '../../store/cartSlice'
import { CheckoutGridTable } from './styles'

export default function Table () {
  const { products } = useSelector(getCart)

  const calculateTotal = (): number => {
    const initialValue = 0
    return products.reduce((prevValue, product) => prevValue + (product.ammount * product.product?.data.price), initialValue)
  }

  return (
    <CheckoutGridTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ammount</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product) => {
            return (
              <tr key={product.product?.id}>
                <td>
                  { product.product?.data.name }
                </td>
                <td>
                  { product.ammount }
                </td>
                <td>
                  { product.product?.data.price * product.ammount }
                </td>
              </tr>
            )
          })
        }
        <tr>
          <td colSpan={2}>
            <b>Cart Total</b>
          </td>
          <td>$ { calculateTotal() } USD</td>
        </tr>
      </tbody>
    </CheckoutGridTable>
  )
}
