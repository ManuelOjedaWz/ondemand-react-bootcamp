import React from 'react'
import { Link } from 'react-router-dom'
import Category from '../../interfaces/Category'

export default function CategoryItem ({ category }: { category: Category }) {
  return (
    <Link to={`/products?category=${category.id}`}>
      <div>
        <img src={category.data.main_image.url} alt={category.data.name} />
        <p>
          {category.data.name}
        </p>
      </div>
    </Link>
  )
}
