import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  FreeMode, Navigation, Thumbs
} from 'swiper'
import { array } from 'prop-types'

import 'swiper/css/thumbs'
import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'

SwiperCore.use([FreeMode, Navigation, Thumbs])

export default function Gallery ({ images = [] }) {
  const [thumbSwiper, setThumbSwiper] = useState(null)

  return (
    <>
      <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbSwiper }} className="mySwiper2">
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
    </>
  )
}

Gallery.propTypes = {
  images: array
}
