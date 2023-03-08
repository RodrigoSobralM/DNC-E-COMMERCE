import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Footer from '../../components/Footer/Footer'

const Cart = () => {
  return (
    <div>
      <HeaderSearch />
      <div>
        <h2>Cart html aqui</h2>
        <button type="submit">
              <Link to={"/checkout"} >Checkout</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Cart