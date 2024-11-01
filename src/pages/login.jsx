import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg'

const logar = async (email, senha) => {
  try {
    const response = await axios.post('http://localhost:3333/login', {
      email: email,
      senha: senha,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await logar(email, senha);
      console.log("Login certo", response.user)
      localStorage.setItem("dados usuario", JSON.stringify(response.user))
      if (response.success == true) {
        navigate('/')
      }
      else {
        alert("Email ou senha incorretos")
      }
    }
    catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };

  return (
    <>
      <div className='img-logo pt-2'>
        <a href='/'><img src={logo} className='w-[250px] h-auto m-auto'></img></a>
      </div>
      <div className='login-container'>
        <div className='tCadastro'>
          <h1 className='text-2xl mb-2'>Login</h1>
        </div>
        <label>
          <input
            placeholder='Usuário'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input-form rounded-[20px]'
          />
        </label>
        <br />
        <label>
          <input
            placeholder='Senha'
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='input-form rounded-[20px] mt-1 mb-5'
          />
        </label>
        <button className="botao-login" onClick={handleLogin}>
          Login
        </button>
        <a href="/recuperacao">Esqueceu sua senha?</a>
        <a href='/cadastro'>Não possui conta? Cadastre-se</a>
      </div>
    </>
  );
}

export default Login;