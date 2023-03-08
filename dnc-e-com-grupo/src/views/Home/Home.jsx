import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <HeaderSearch />
      <div>
        <h2>Home html aqui</h2>
        <button type="submit">
              <Link to={"/addToCart"} >add</Link>
        </button>
        <Footer />
      </div>
    </div>
  )
}

export default Home