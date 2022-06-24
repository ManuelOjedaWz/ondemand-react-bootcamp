import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Product from '../../interfaces/Product'
import { CartProduct, setCart } from '../../store/cartSlice'

function useAddToCart (product: Product|null) {
  const dispatch = useDispatch()
  const [number, setNumber] = useState<number>(1)

  const onHandleChange = (e: React.ChangeEvent) => {
    const { value } = (e.target as HTMLInputElement)
    setNumber(parseInt(value, 10))
  }

  const handleAddToCart = () => {
    if (number === 0) {
      alert('Please add an ammount to add')
      return null
    }

    const cartProduct: CartProduct = {
      id: product?.id,
      name: product?.data.name,
      sku: product?.data.sku,
      price: product?.data.price,
      stock: product?.data.stock,
      mainimage: product?.data.mainimage,
      ammount: number
    }

    dispatch(setCart(cartProduct))
  }

  return {
    number,
    onHandleChange,
    handleAddToCart
  }
}

export default useAddToCart
