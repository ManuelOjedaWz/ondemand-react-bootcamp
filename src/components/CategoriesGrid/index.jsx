import React from 'react'
import { useFeaturedCategories } from '../../utils/hooks/useFeaturedCategories'
import CategoryItem from './CategoryItem'
import './styles.scss'

export default function CategoriesGrid () {
  const { data, isLoading } = useFeaturedCategories()

  return (
    <section className='featured-categories'>
      <h3>Featured Categories</h3>

      <div className="featured-categories--grid">
        { isLoading && (<p>Loading ...</p>) }
        {
          !isLoading &&
          (data.results.map((category) => {
            return (
              <CategoryItem key={category.id} category={category} />
            )
          }))
        }
      </div>
    </section>
  )
}
