import React from 'react'
import { useSelector } from 'react-redux'
import Category from '../../interfaces/Category'
import { getCategories } from '../../store/categoriesSlice'
import useHandleSidebar from '../../utils/hooks/useHandleSidebar'
import { Button } from '../FeaturedProducts/styled'
import Spinner from '../Spinner'
import ProductSidebarCheckbox from './ProductSidebarCheckbox'

const isActive = (filters: string[], id: string) => {
  if (filters.filter((f) => f === id).length > 0) {
    return 'filterIsActive'
  }
}

export default function ProductsSidebar () {
  const {
    data,
    isLoading
  } = useSelector(getCategories)
  const categories = data.results
  const { filters, handleFilters, handleClearFilter } = useHandleSidebar(categories)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='products-layout--sidebar'>
      <h3>Filters:</h3>
      {
        categories.map((category: Category) => {
          return (
            <div
              key={category?.id}
              className={isActive(filters, category.id)}
            >
              <ProductSidebarCheckbox
                category={category}
                onHandleFilter={handleFilters}
                filters={filters}
              />
              { category?.data.name }
            </div>
          )
        })
      }

      <Button onClick={handleClearFilter}>Clear filters</Button>
    </div>
  )
}
