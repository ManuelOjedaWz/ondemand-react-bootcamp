/* eslint-disable react/prop-types */
import React from 'react'

export default function Banner ({ banner }) {
  return (
    <div className='home--slider--container'>
      <img className='home--slider--container-image' src={banner.data.main_image.url} alt={banner.data.main_image.alt} />
      <p>
        { banner.data.title }
      </p>
    </div>
  )
}
