import { array, func } from 'prop-types'
import React from 'react'

const isActive = (filters, id) => {
  if (filters.filter((f) => f === id).length > 0) {
    return 'filterIsActive'
  }
}
export default function ProductsSidebar ({ categories = [], onHandleFilter, onHandleClearFilter, filters = [] }) {
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
              <input type="checkbox" value={category.id} onClick={onHandleFilter} id={`category-${category.id}`} />
              { category?.data.name }
            </div>
          )
        })
      }

      <button onClick={() => onHandleClearFilter()}>Clear filters</button>
    </div>
  )
}

ProductsSidebar.propTypes = {
  categories: array,
  onHandleFilter: func,
  onHandleClearFilter: func,
  filters: array
}
