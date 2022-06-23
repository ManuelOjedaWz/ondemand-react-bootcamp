import React from 'react'
import { useSelector } from 'react-redux'
import Category from '../../interfaces/Category'
import { getCategories } from '../../store/categoriesSlice'
import List from '../List'
import Spinner from '../Spinner'
import CategoryItem from './CategoryItem'
import './styles.scss'

export default function CategoriesGrid () {
  const { data, isLoading } = useSelector(getCategories)
  const { results }: { results: Array<Category> } = data

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <section className='featured-categories'>
      <h3>Featured Categories</h3>

      <div className="featured-categories--grid">
        { isLoading && (<p>Loading ...</p>) }
        {
          !isLoading &&
          (
            <List items={results} itemComponent={CategoryItem} prop="category" />
          )
        }
      </div>
    </section>
  )
}
