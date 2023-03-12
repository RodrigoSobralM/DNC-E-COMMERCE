import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Footer from '../../components/Footer/Footer'

const Checkout = () => {
  return (
    <div>
      <HeaderSearch />
      <div>
        <h2>Checkout html aqui</h2>
        <button type="submit">
              <Link to={"/home"} >Send</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout