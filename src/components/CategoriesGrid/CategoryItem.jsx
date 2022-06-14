import React from 'react'
import PropTypes from 'prop-types'

export default function CategoryItem ({ category }) {
  return (
    <div key={category.id}>
      <img src={category.data.main_image.url} alt={category.data.name} />
      <p>
        {category.data.name}
      </p>
    </div>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.object
}
