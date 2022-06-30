import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal, CartProduct, selectCart, removeProductFromCart } from '../../store/cartSlice'
import { Button, Table } from '../../styles/global'
import AmmountInput from './AmmountInput'

interface CartTableProps {
  products: Array<CartProduct>
}

export default function CartTable ({ products }: CartTableProps) {
  const { total } = useSelector(selectCart)
  const dispatch = useDispatch()

  const removeItem = (product: CartProduct) => {
    dispatch(removeProductFromCart(product))
    dispatch(calculateTotal())
  }

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Edit</th>
            <th>Image</th>
            <th>Name</th>
            <th>Unit price</th>
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
                    <Button onClick={() => removeItem(product)}>
                      <i className="fas fa-remove fa-2x"></i>
                    </Button>
                  </td>
                  <td>
                    <img src={product.mainimage.url} alt={product?.name} />
                  </td>
                  <td>{ product?.name }</td>
                  <td>{ product.price }</td>
                  <td>
                    <AmmountInput product={product} />
                  </td>
                  <td><b>$</b> { (product.price * product.ammount).toFixed(2) } <b>USD</b></td>
                </tr>
              )
            })
          }
          <tr>
            <td colSpan={5}>
              <b>Cart total</b>
            </td>
            <td>
              <b>$</b> { total } <b>USD</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
