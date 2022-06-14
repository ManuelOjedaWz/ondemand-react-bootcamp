import React from 'react'
import { Route, Routes } from 'react-router'
import Default from './layouts/Default'
import { BannersProvider } from './providers/BannersProvider'
import Home from './views/Home'
import Products from './views/Products'

function App () {
  return (
    <BannersProvider>
      <Routes>
        <Route element={<Default />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
    </BannersProvider>
  )
}

export default App
