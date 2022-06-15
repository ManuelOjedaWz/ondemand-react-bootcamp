import React from 'react'
import Spinner from '../components/Spinner'
import { useSearch } from '../utils/hooks/useSearch'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import '../styles/Search.scss'

export default function Search () {
  const { data, isLoading } = useSearch()
  console.log(data, isLoading)

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  if (data.total_results_size === 0) {
    return (
      <section>
        <h1>No results were found</h1>
      </section>
    )
  }

  return (
    <section className='products-layout-products-grid'>
      {
        data.results.map((product: any, index: any) => {
          return (
            <ProductItem product={product} key={index} />
          )
        })
      }
    </section>
  )
}
