import { array, func } from 'prop-types'
import React from 'react'

export default function ProductsSidebar ({ categories = [], onHandleFilter, filters = [] }) {
  const isActive = (id) => {
    if (filters.filter((f) => f === id).length > 0) {
      return 'filterIsActive'
    }
  }

  return (
    <div className='products-layout--sidebar'>
      <h3>Filters:</h3>
      {
        categories.map((category) => {
          return (
            <div
              key={category?.id}
              className={isActive(category.id)}
            >
              <input type="checkbox" value={category.id} onClick={onHandleFilter} />
              { category?.data.name }
            </div>
          )
        })
      }
    </div>
  )
}

ProductsSidebar.propTypes = {
  categories: array.isRequired,
  onHandleFilter: func.isRequired,
  filters: array
}
