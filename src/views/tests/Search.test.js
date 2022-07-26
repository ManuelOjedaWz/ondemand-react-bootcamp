import React from 'react'
import { act, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'

function renderSearchPage (route) {
  act(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    )
  })
}

test('Should render a list of results when search is successful', async () => {
  renderSearchPage('/search?q=test')

  expect(await screen.findByTestId('search-page')).toBeInTheDocument()
})

test('Should not render a list of results when search is empty', async () => {
  renderSearchPage('/search?q=empty')

  expect(await screen.findByTestId('search-not-found')).toBeInTheDocument()
})
