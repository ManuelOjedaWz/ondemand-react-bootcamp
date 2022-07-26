import { rest } from 'msw'
import fakeRef from './en-us/fakeRef.json'
import featuredBanner from './en-us/featured-banners.json'
import featuredCategories from './en-us/product-categories.json'
import featuredProducts from './en-us/featured-products.json'
import productOne from './en-us/productOne.json'
import productTwo from './en-us/productTwo.json'
import emptySearch from './en-us/emptySearch.json'

const BANNER = '[[at(document.type, "banner")]]'
const CATEGORY = '[[at(document.type, "category")]]'
const PRODUCTS = '[[at(document.type, "product")]]'
const PRODUCT_1 = '[[at(document.id, "YWL8XBIAAC0AzuPZ")]]'
const PRODUCT_2 = '[[at(document.id, "YWJKhBIAACkAy8ew")]]'

export const handlers = [
  rest.get('https://wizeline-academy.cdn.prismic.io/api/v2', (req, res, ctx) => {
    return res(
      ctx.json(fakeRef),
      ctx.status(200)
    )
  }),
  rest.get('https://wizeline-academy.cdn.prismic.io/api/v2/documents/search', (req, res, ctx) => {
    const requestType = req.url.searchParams.getAll('q')

    let response = null
    if (requestType.length === 1) {
      switch (requestType[0]) {
        case BANNER:
          response = featuredBanner
          break
        case CATEGORY:
          response = featuredCategories
          break
        case PRODUCTS:
          response = featuredProducts
          break
        case PRODUCT_1:
          response = productOne
          break
        case PRODUCT_2:
          response = productTwo
          break
      }
    } else if (requestType.includes('[[fulltext(document, "test")]]')) {
      response = featuredProducts
    } else if (requestType.includes('[[fulltext(document, "empty")]]')) {
      response = emptySearch
    } else if (requestType.includes('[[at(document.tags, ["Featured"])]]')) {
      response = featuredProducts
    }

    return res(
      ctx.json(response),
      ctx.status(200)
    )
  })
]
