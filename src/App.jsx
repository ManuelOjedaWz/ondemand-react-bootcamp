import React from 'react'
import Default from './layouts/Default'
import { BannersProvider } from './providers/BannersProvider'
import Home from './views/Home'

function App () {
  return (
    <BannersProvider>
      <Default>
        <Home />
      </Default>
    </BannersProvider>
  )
}

export default App
