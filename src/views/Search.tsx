import React from 'react'
import Spinner from '../components/Spinner'
import { useSearch } from '../utils/hooks/useSearch'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import NotFoundImage from '../assets/crying.jpeg'
import '../styles/Search.scss'
import ProductsPagination from '../components/ProductsPagination'

export default function Search () {
  const { search, getProducts } = useSearch()
  const { data, isLoading } = search
  console.log(data, isLoading)

  const handleProductFetch = (page: number) => {
    getProducts(page)
  }

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  if (data.total_results_size === 0) {
    return (
      <section className='search-not-found'>
        <img src={NotFoundImage} alt="Not found" />
        <h1>No results were found in the search.</h1>
      </section>
    )
  }

  return (
    <>
      <section className='products-layout-products-grid'>
        {
          data.results.map((product: any, index: any) => {
            return (
              <ProductItem product={product} key={index} />
            )
          })
        }
      </section>
      <ProductsPagination products={data} onHandleProductFetch={handleProductFetch} />
    </>
  )
}
