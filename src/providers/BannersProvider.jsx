/* eslint-disable react/prop-types */
import React from 'react'
import { useFeaturedBanners } from '../utils/hooks/useFeaturedBanners'

export const BannersContext = React.createContext()

export function BannersProvider ({ children }) {
  const { data, isLoading } = useFeaturedBanners()

  const state = {
    data,
    isLoading
  }

  return (
    <BannersContext.Provider value={state}>
      { children }
    </BannersContext.Provider>
  )
}
