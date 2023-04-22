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
    <div className="login">
      <Header />
      <div className="form">
      <h2>Acesse com seu login ou cadastre-se!</h2>
      <h3>você pode entrar com o seu CPF</h3>
      <form onSubmit={handleSubmit} className='x'>
        <label className='y'>
          Digite seu CPF:
          <input className='z' type="text" placeholder="CPF" name="cpf" value={cpf} onChange={handleCpfChange} />
        </label>
        <label className='y'>
          Senha:
          <input className='z' type="password" name="pass" placeholder="*********" value={pass} onChange={handlePassChange} />
        </label>
        <button type="submit">Entrar</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;