import React, { useState } from 'react'
import Default from './layouts/Default'
import { BannersProvider } from './providers/BannersProvider'
import Home from './views/Home'
import Products from './views/Products'

function App () {
  const [page, setPage] = useState('home')

  const handlePage = (nextPage = 'home') => {
    setPage(nextPage)
  }

  return (
    <BannersProvider>
      <Default onHandleLinkPage={handlePage}>
        {
          page === 'home' &&
          (<Home onHandleLinkPage={handlePage} />)
        }
        {
          page === 'products' &&
          (<Products onHandleLinkPage={handlePage} />)
        }
      </Default>
    </BannersProvider>
  )
}

export default App
