import React from 'react'
import { useDispatch } from 'react-redux'
import { CartProduct, removeItemFromCart } from '../../store/cartSlice'
import { Button, Table } from '../../styles/global'
import AmmountInput from './AmmountInput'

interface CartTableProps {
  products: Array<CartProduct>
}

export default function CartTable ({ products }: CartTableProps) {
  const dispatch = useDispatch()

  const calculateTotal = (): number => {
    const initialValue = 0
    return products.reduce((prevValue, product) => prevValue + (product.ammount * product.product?.data.price), initialValue)
  }

  const removeItem = (product: CartProduct) => {
    dispatch(removeItemFromCart({
      product: product.product
    }))
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
                <tr key={product.product?.id}>
                  <td>
                    <Button onClick={() => removeItem(product)}>
                      <i className="fas fa-remove fa-2x"></i>
                    </Button>
                  </td>
                  <td>
                    <img src={product.product?.data.mainimage.url} alt={product.product?.data.name} />
                  </td>
                  <td>{ product.product?.data.name }</td>
                  <td>{ product.product?.data.price }</td>
                  <td>
                    <AmmountInput product={product} />
                  </td>
                  <td>{ product.product?.data.price * product.ammount }</td>
                </tr>
              )
            })
          }
          <tr>
            <td colSpan={5}>
              <b>Cart total</b>
            </td>
            <td>$ { calculateTotal() } USD</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
