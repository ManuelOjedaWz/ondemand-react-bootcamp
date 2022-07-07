/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Header from './index'
import { BrowserRouter } from 'react-router-dom'

test('Logo and title should be rendered', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  )
  const logoElement = screen.getByRole('img')
  const titleElement = screen.getByText('E-Commerce')

  expect(logoElement).toBeInTheDocument()
  expect(titleElement).toBeInTheDocument()
})
