import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../store/cartSlice'
import { CheckoutGridTable } from './styles'

export default function Table () {
  const { products, total } = useSelector(selectCart)

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
              <tr key={product?.id}>
                <td>
                  { product?.name }
                </td>
                <td>
                  { product.ammount }
                </td>
                <td>
                  <b>$</b> { (product.price * product.ammount).toFixed(2) } <b>USD</b>
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
            <b>$</b> { total } <b>USD</b>
          </td>
        </tr>
      </tbody>
    </CheckoutGridTable>
  )
}
