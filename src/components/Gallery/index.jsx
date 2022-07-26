import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation, Thumbs
} from 'swiper/core'
import { array } from 'prop-types'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import './styles.css'

SwiperCore.use([Navigation, Thumbs])

export default function Gallery ({ images = [] }) {
  const [thumbSwiper, setThumbSwiper] = useState(null)

  return (
    <Swiper
      loop={true}
      navigation
      thumbs={{ swiper: thumbSwiper }}
      slidesPerView={1}
      className="mySwiper2"
    >
      <SwiperSlide>
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.image.url} />
            </SwiperSlide>
          ))
        }
      </SwiperSlide>
    </Swiper>
  )
}

Gallery.propTypes = {
  images: array
}
