/* eslint-disable react/prop-types */
import React from 'react'

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
