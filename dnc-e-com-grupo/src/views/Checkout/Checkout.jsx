import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import HeaderSearchModal from '../../components/HeaderSearchModal/HeaderSearchModal'
import Footer from '../../components/Footer/Footer'

const Checkout = (data) => {
  return (
    <div>
      <HeaderSearchModal />
      <div>
        <h2>Finalizar compra</h2>
        <form>
          <label htmlFor="name">Digite seu nome:</label>
          <input type="text" placeholder='Nome Completo' id="name" name="name" />

          <label htmlFor="cpf">Digite seu CPF:</label>
          <input type="number" placeholder='CPF' id="cpf" name="cpf" />

          <label htmlFor="address">Endereço:</label>
          <input type="text" placeholder='Seu endereço' id="address" name="address" />

          <label htmlFor="payment">Forma de pagamento:</label>
          <input type="text" placeholder='********' id="payment" name="payment" />

          <button type="submit">
            <Link to={"/home"}>Enviar</Link>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout