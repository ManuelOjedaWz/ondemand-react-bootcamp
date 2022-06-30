import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import Default from './layouts/Default'
import { useFeaturedCategories } from './utils/hooks/useFeaturedCategories'
import Home from './views/Home'
import Products from './views/Products'
import { setCategories } from './store/categoriesSlice'
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners'
import { useProducts } from './utils/hooks/useProducts'
import { setBanners } from './store/bannersSlice'
import { setProducts } from './store/productsSlice'
import { useFeaturedProducts } from './utils/hooks/useFeaturedProducts'
import { setFeaturedProducts } from './store/featuredProductsSlice'
import Product from './views/Product'
import Search from './views/Search'
import Cart from './views/Cart'
import Checkout from './views/Checkout'
import NotFound from './views/NotFound'

function App () {
  const categories = useFeaturedCategories()
  const banners = useFeaturedBanners()
  const featuredProducts = useFeaturedProducts()
  const { featured: products } = useProducts()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategories(categories))
  }, [categories])

  useEffect(() => {
    dispatch(setBanners(banners))
  }, [banners])

  useEffect(() => {
    dispatch(setProducts(products))
  }, [products])

  useEffect(() => {
    dispatch(setFeaturedProducts(featuredProducts))
  }, [featuredProducts])

  return (
    <Routes>
      <Route element={<Default />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/search' element={<Search />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
