import React from 'react'
// import logo from './logo.svg';
// import './App.css';
import Default from './layouts/Default'
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners'

function App () {
  const { data, isLoading } = useFeaturedBanners()
  console.log(data, isLoading)

  return (
    <Default>
      Testing
    </Default>
  )
}

export default App
