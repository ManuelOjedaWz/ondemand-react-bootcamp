import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useFetchProduct } from '../utils/hooks/useFetchProduct'

export default function Product () {
  const { productId } = useParams()
  const { data, isLoading } = useFetchProduct(productId as string)

  console.log(data)

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <div>Product</div>
  )
}
