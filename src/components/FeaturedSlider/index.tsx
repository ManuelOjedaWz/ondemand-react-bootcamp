import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import IBanner from '../../interfaces/Banner'
import { BannersContext } from '../../providers/BannersProvider'
import { getBanners } from '../../store/bannersSlice'
import Spinner from '../Spinner'
import Banner from './Banner'
import SliderButton from './SliderButton'
import './styles.scss'
import { useSliderFeatures } from './useSliderFeatures'

export default function FeaturedSlider () {
  const { data, isLoading } = useSelector(getBanners)
  const [index, setIndex] = useState<number>(0)
  const { prevSlider, nextSlider } = useSliderFeatures({ data, isLoading, index, setIndex })

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <div className='home--slider'>
      <div>
        { isLoading && (<p>Loading ...</p>) }
        {
          data && data.results && (
            data.results.map((banner: IBanner, bannerIndex: number) => {
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
