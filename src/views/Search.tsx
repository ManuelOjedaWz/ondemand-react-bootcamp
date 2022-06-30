import React from 'react'
import Spinner from '../components/Spinner'
import { useSearch } from '../utils/hooks/useSearch'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import NotFoundImage from '../assets/crying.jpeg'
import ProductsPagination from '../components/ProductsPagination'
import { useNavigate } from 'react-router'
import '../styles/Search.scss'
import List from '../components/List'

export default function Search () {
  const navigate = useNavigate()
  const { featured: search } = useSearch()
  const { data, isLoading } = search

  const handleProductFetch = (page: number) => {
    const url = new URL(window.location.href)
    url.searchParams.set('page', page.toString())
    navigate(`${url.pathname}${url.search}`)
    navigate(0)
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
      <h1>Search</h1>
      <section className='products-layout-products-grid'>
        <List items={data.results} itemComponent={ProductItem} prop="product" />
      </section>
      <ProductsPagination products={data} onHandleProductFetch={handleProductFetch} />
    </>
  )
}
