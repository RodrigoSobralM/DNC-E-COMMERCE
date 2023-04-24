import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import './index.scss';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cpf.trim() === '' || pass.trim() === '') {
      setErrorMessage('Por favor, preencha todos os campos.');
    } else {
      return true;
    }
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
    if (event.target.value.trim() !== '' && pass.trim() !== '') {
      setErrorMessage('');
    }
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
    if (event.target.value.trim() !== '' && cpf.trim() !== '') {
      setErrorMessage('');
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
      <h2>Acesse com seu login ou cadastre-se!</h2>
      <h3>você pode entrar com o seu CPF</h3>
      <form onSubmit={handleSubmit} className='form'>
        <label className='label'>
          Digite seu CPF:
          <input className='input' type="text" placeholder="CPF" name="cpf" value={cpf} onChange={handleCpfChange} />
        </label>
        <label className='label'>
          Senha:
          <input className='input' type="password" name="pass" placeholder="*********" value={pass} onChange={handlePassChange} />
        </label>
        <div className="login-button">
        <button type="submit">Entrar</button>
        </div>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;