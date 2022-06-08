import React from 'react'
import CategoriesGrid from '../components/CategoriesGrid'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedSlider from '../components/FeaturedSlider'

// eslint-disable-next-line react/prop-types
export default function Home ({ onHandleLinkPage }) {
  return (
    <section className='Home'>
      <FeaturedSlider />
      <CategoriesGrid />
      <FeaturedProducts onHandleLinkPage={onHandleLinkPage} />
    </section>
  )
}
