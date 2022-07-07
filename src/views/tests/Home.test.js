import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { BrowserRouter } from 'react-router-dom'
import App from '../../App'

test('Should show Featured Banners when API call is done', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  })

  expect(await screen.findByTestId('featured-slider')).toBeInTheDocument()
})

test('Should show Featured Categories when API call is done', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  })

  expect(await screen.findByTestId('featured-categories')).toBeInTheDocument()
})

test('Should show Featured Products when API call is done', async () => {
  act(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )
  })

  expect(await screen.findByTestId('featured-products')).toBeInTheDocument()
})
