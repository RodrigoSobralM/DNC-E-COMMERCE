import './index.scss'
import React from 'react'


const HeaderSearch = () => {
  return (
    <header className='header-search'>
      <div className='header-search-content'>

        <img className='img-logo' alt='logo DNC' src='logoDNC.png'></img>
        <input className='header-input' alt='barra de pesquisa' placeholder='O que você está procurando?'></input>
        <img className='img-cart' alt='carrinho de compras' src='iconCart.png'></img>

      </div>
      <div className='list-content'>
        <ul>

          <li>Novidades</li>
          <li>Jogos</li>
          <li>Video Games</li>
          <li>Mesas Gamer</li>
          <li>Promoções</li>
          <li>Atendimento</li>
          
        </ul>
      </div>
    </header>
  )
}

export default HeaderSearch