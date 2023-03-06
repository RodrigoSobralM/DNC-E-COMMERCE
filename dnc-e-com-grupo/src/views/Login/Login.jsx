import React from 'react'
import './index.scss'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
        <button type="submit">
            <Link to={"/home"} className="linkText">Entrar</Link>
        </button>
    </div>
  )
}

export default Login