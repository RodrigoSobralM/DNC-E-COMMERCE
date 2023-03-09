import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

const AddToCart = () => {
  return (
    <section className="product">
      <HeaderSearch />
      <ProductDetail />
      <Footer />
    </section>
  )
}

export default AddToCart