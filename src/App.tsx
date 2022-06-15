import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import Default from './layouts/Default'
import { BannersProvider } from './providers/BannersProvider'
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

function App () {
  const { data: categories, isLoading: isLoadingCategories } = useFeaturedCategories()
  const { data: banners, isLoading: isLoadingBanners } = useFeaturedBanners()
  const { data: featuredProducts, isLoading: isLoadingFeaturedProducts } = useFeaturedProducts()
  const { products } = useProducts()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategories({
      data: categories,
      isLoading: isLoadingCategories
    }))
  }, [categories])

  useEffect(() => {
    dispatch(setBanners({
      data: banners,
      isLoading: isLoadingBanners
    }))
  }, [banners])

  useEffect(() => {
    dispatch(setProducts({
      data: products.data,
      isLoading: products.isLoading
    }))
  }, [products])

  useEffect(() => {
    dispatch(setFeaturedProducts({
      data: featuredProducts,
      isLoading: isLoadingFeaturedProducts
    }))
  }, [featuredProducts])

  return (
    <BannersProvider>
      <Routes>
        <Route element={<Default />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </BannersProvider>
  )
}

export default App
