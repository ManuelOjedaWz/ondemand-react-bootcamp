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
      <Table data-testid='cart-table'>
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
        <tbody data-testid='cart-table-body'>
          {
            products.map((product) => {
              return (
                <tr key={product?.id} data-testid={`cart-table-row-${product?.id}`}>
                  <td>
                    <Button onClick={() => removeItem(product)} className='cart-remove-button' data-testid={`cart-remove-button-${product.id}`}>
                      <i className="fas fa-remove fa-2x"></i>
                    </Button>
                  </td>
                  <td>
                    <img src={product.mainimage.url} alt={product?.name} />
                  </td>
                  <td className='cart-table-body--product-name'>{ product?.name }</td>
                  <td className='cart-table-body--product-price'>{ product.price }</td>
                  <td>
                    <AmmountInput product={product} />
                  </td>
                  <td>
                    <span>
                      <b>$</b>
                      <span className='cart-table-body--product-subtotal'>
                      { (product.price * product.ammount).toFixed(2) }
                      </span>
                      <b>USD</b>
                    </span>
                  </td>
                </tr>
              )
            })
          }
          <tr>
            <td colSpan={5}>
              <b>Cart total</b>
            </td>
            <td>
              <b>$</b> <span data-testid='cart-table-total'>{ total }</span> <b>USD</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
