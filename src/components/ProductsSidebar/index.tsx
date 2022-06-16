import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import Category from '../../interfaces/Category'
import useHandleSidebar from '../../utils/hooks/useHandleSidebar'
import ProductSidebarCheckbox from './ProductSidebarCheckbox'

const isActive = (filters: string[], id: string) => {
  if (filters.filter((f) => f === id).length > 0) {
    return 'filterIsActive'
  }
}

interface ProductsSidebarProps {
  categories: Array<Category>;
}

export default function ProductsSidebar ({ categories = [] }: ProductsSidebarProps) {
  const { filters, handleFilters, handleClearFilter } = useHandleSidebar(categories)

  return (
    <div className='products-layout--sidebar'>
      <h3>Filters:</h3>
      {
        categories.map((category) => {
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

      <button onClick={handleClearFilter}>Clear filters</button>
    </div>
  )
}
