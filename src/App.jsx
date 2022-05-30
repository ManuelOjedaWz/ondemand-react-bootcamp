import React from 'react'
import { Route, Routes } from 'react-router'
import Default from './layouts/Default'
// import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners'
import { BannersProvider } from './providers/BannersProvider'
import Home from './views/Home'
import Categories from './views/Categories'
import Products from './views/Products'
import NotFound from './views/NotFound'

function App () {
  return (
    <BannersProvider>
      <Default>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/categories' element={<Categories />} />
          <Route exact path='/products' element={<Products />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Default>
    </BannersProvider>
  )
}

export default App
