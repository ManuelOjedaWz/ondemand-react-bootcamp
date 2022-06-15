import React, { useState, useEffect, useCallback } from 'react'
import ProductsSidebar from '../components/ProductsSidebar'
import ProductsJson from '../mocks/en-us/products.json'
import '../styles/Products.scss'
import ProductItem from '../components/FeaturedProducts/ProductItem'
import ProductsPagination from '../components/ProductsPagination'
import Spinner from '../components/Spinner'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useProducts } from '../utils/hooks/useProducts'
import { useSelector } from 'react-redux'

export default function Products () {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState<Array<string>>([])
  const { products, getProducts } = useProducts()
  const {
    data: categories,
    isLoading
  } = useSelector((state: any) => state.categories)

  const handleCheckInput = (id: string|null, value: boolean = true) => {
    const categoryToBeHandled: any = document.getElementById(`category-${id}`)
    if (categoryToBeHandled) {
      categoryToBeHandled.checked = value
    }
  }

  const handleClearFilter = () => {
    filters.forEach((filter) => handleCheckInput(filter, false))
    setFilters([])
    navigate('/products')
    window.location.reload()
  }

  const handleFilters = (e: Event) => {
    const { checked, value } = (e.target as HTMLInputElement)
    const newFilters = checked
      ? [...filters, value]
      : filters.filter(i => i !== value)
    setFilters(newFilters)
  }

  const handleProductFetch = (page: number) => {
    getProducts(page)
  }

  useEffect(() => {
    if (searchParams.get('category')) {
      const categoryId: string|null = searchParams.get('category')
      handleCheckInput(categoryId)
      setFilters([...filters, categoryId as string])
    }
  }, [categories])

  return (
    <section className='products-layout'>
      <ProductsSidebar
        categories={categories?.results}
        onHandleFilter={handleFilters}
        onHandleClearFilter={handleClearFilter}
        filters={filters}
      />
      <div className="products-layout--products">
        <h1>This is Product List Page</h1>
        <Link to='/home'>
          <button>
            Return to home
          </button>
        </Link>

        <h4>
          Products found: {products.data.total_results_size}
        </h4>

        {
          products.isLoading
            ? <Spinner />
            : (
              <div className="products-layout-products-grid">
                {
                products.data.results.map((product: any, index: any) => {
                  return (
                    <ProductItem product={product} key={index} />
                  )
                })}
              </div>
              )
        }

        {
          !products.isLoading && (
            <ProductsPagination products={products.data} onHandleProductFetch={handleProductFetch} />
          )
        }
      </div>
    </section>
  )
}
