import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearchModal from '../../components/HeaderSearchModal/HeaderSearchModal'
import Footer from '../../components/Footer/Footer'

const Checkout = () => {
  return (
    <div>
      <HeaderSearchModal />
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