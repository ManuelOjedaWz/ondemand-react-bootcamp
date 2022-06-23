import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getCart } from '../../store/cartSlice'
import { CheckoutGridTable } from './styles'

export default function Table () {
  const { products } = useSelector(getCart)

  const calculateTotal = useMemo(() => {
    const initialValue = 0
    return products.reduce((prevValue, product) => prevValue + (product.ammount * product.product?.data.price), initialValue).toFixed(2)
  }, [])

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
                  <b>$</b> { (product.product?.data.price * product.ammount).toFixed(2) } <b>USD</b>
                </td>
              </tr>
            )
          })
        }
        <tr>
          <td colSpan={2}>
            <b>Cart Total</b>
          </td>
          <td>
            <b>$</b> { calculateTotal } <b>USD</b>
          </td>
        </tr>
      </tbody>
    </CheckoutGridTable>
  )
}
