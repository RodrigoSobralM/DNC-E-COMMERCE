import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import ProductsCard from "../../components/ProductsCard/ProductsCard"
import Footer from "../../components/Footer/Footer"
import homeBanner from "../../assets/banner.png"

const Home = ({ data }) => {
  return (
    <section className="home">
      <HeaderSearch />
      <div className="home-banner">
        <img src={homeBanner} alt="banner" />
      </div>
      <div className="home-products">
      {
        data.map((product) => (<ProductsCard key={product.id} data={product} />))
      }
      </div>
      <Footer />
    </section>
  )
}

export default Home