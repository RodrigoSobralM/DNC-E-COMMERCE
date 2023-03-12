import './index.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../../components/Header/Header"

const Login = () => {
  return (
    <div>
      <Header />
      <h2>Login html aqui</h2>
      <button type="submit">
            <Link to={"/home"} >Entrar</Link>
      </button>
    </div>
  )
}

export default Login