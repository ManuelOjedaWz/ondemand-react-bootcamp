import React from 'react'
import CategoriesGrid from '../components/CategoriesGrid'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedSlider from '../components/FeaturedSlider'

export default function Home () {
  return (
    <section className='Home'>
      <FeaturedSlider />
      <CategoriesGrid />
      <FeaturedProducts />
    </section>
  )
}
