import React from 'react'
import PropTypes from 'prop-types'
import CategoriesGrid from '../components/CategoriesGrid'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedSlider from '../components/FeaturedSlider'

export default function Home ({ onHandleLinkPage }) {
  return (
    <section className='Home'>
      <FeaturedSlider />
      <CategoriesGrid />
      <FeaturedProducts onHandleLinkPage={onHandleLinkPage} />
    </section>
  )
}

Home.propTypes = {
  onHandleLinkPage: PropTypes.func
}
