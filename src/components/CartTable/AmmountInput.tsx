import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CartProduct, addToCart, calculateTotal } from '../../store/cartSlice'
import { Input } from '../../styles/global'

interface AmmountInputProps {
  product: CartProduct
}

export default function AmmountInput ({ product }: AmmountInputProps) {
  const [ammount, setAmmount] = useState<number>(product.ammount)
  const dispatch = useDispatch()

  useEffect(() => {
    const cartProduct: CartProduct = {
      ...product,
      ammount
    }
    dispatch(addToCart(cartProduct))
    dispatch(calculateTotal())
  }, [ammount])

  const handleChange = (e: any) => {
    setAmmount(e.target.value)
  }

  return (
    <>
      <Input
        type='number'
        value={ammount}
        onChange={handleChange}
        min={1}
        max={product.stock}
      />
    </>
  )
}
