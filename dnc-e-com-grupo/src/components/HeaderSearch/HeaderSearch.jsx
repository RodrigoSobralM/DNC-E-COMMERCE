import './index.scss'
import React from 'react'
import dncIcon from "../../assets/dnc-logo.svg"


const HeaderSearch = () => {
  return (
    <header>
      <div className="header-search">
        <img src={dncIcon} alt="logo" className="header-search__logo"/>
        <div className="header-search__input">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="46" width="46"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path></svg>
          <input type="text" placeholder="O que você está procurando?" />
        </div>
        <svg className="header-search__cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="96" width="96"><path d="M223.87109,65.43115l-12.15722,66.86231A23.98711,23.98711,0,0,1,188.10156,152H72.13135l4.36377,24H184a24.01161,24.01161,0,1,1-22.624,16H102.624a24.00309,24.00309,0,1,1-40.85986-7.57666L34.05078,32H16a8,8,0,0,1,0-16H34.05078A15.9918,15.9918,0,0,1,49.793,29.13818L54.67676,56H216a8.00076,8.00076,0,0,1,7.87109,9.43115Z"></path></svg>    
      </div>
      <div className="header-nav">
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