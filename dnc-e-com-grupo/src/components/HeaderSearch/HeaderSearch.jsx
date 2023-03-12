import React from 'react'
import logoDNC from "../../assets/dnc-logo.svg"


const HeaderSearch = () => {
  return (
    <header className='header-search'>
      <div className='header-search-content'>

        <img className='img-logo' alt='logo DNC' src={logoDNC}></img>
        <input className='header-input' name='header-input' alt='barra de pesquisa' placeholder='O que você está procurando?'></input>
        <img className='icon-cart' alt='carrinho de compras' src='iconCart.png'></img>

      </div>
      <nav className='list-content'>
        <ul className='list-nav'>

          <li><a href='#'>Novidades</a></li>
          <li><a href='#'>Jogos</a></li>
          <li><a href='#'>Video Games</a></li>
          <li><a href='#'>Mesas Gamer</a></li>
          <li><a href='#'>Promoções</a></li>
          <li><a href='#'>Atendimento</a></li>
          
        </ul>
      </nav>
    </header>
  )
}

export default HeaderSearch