import React, { useContext, useState } from 'react'
import { BannersContext } from '../../providers/BannersProvider'
import Banner from './Banner'
import SliderButton from './SliderButton'
import './styles.scss'
import { useSliderFeatures } from './useSliderFeatures'

export default function FeaturedSlider () {
  const { data, isLoading } = useContext(BannersContext)
  const [index, setIndex] = useState(0)
  const { prevSlider, nextSlider } = useSliderFeatures({ data, isLoading, index, setIndex })

  return (
    <div className='home--slider'>
      <div>
        { isLoading && (<p>Loading ...</p>) }
        {
          data && data.results && (
            data.results.map((banner, bannerIndex) => {
              if (bannerIndex === index) {
                return (
                  <Banner banner={banner} key={banner.id} />
                )
              }

              return null
            })
          )
        }
      </div>
      <SliderButton
        onClickFunction={prevSlider}
        buttonClassName='home--slider-button home--slider-prevButton'
        iClassName='fa-solid fa-angles-left'
      />
      <SliderButton
        onClickFunction={nextSlider}
        buttonClassName='home--slider-nextButton home--slider-button'
        iClassName='fa-solid fa-angles-right'
      />
    </div>
  )
}
