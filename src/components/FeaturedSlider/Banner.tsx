import React from 'react'
import PropTypes from 'prop-types'
import IBanner from '../../interfaces/Banner'

interface BannerProps {
  banner: IBanner
}

export default function Banner ({ banner }: BannerProps) {
  return (
    <div className='home--slider--container'>
      <img className='home--slider--container-image' src={banner.data.main_image.url} alt={banner.data.main_image.alt} />
      <p>
        { banner.data.title }
      </p>
    </div>
  )
}
