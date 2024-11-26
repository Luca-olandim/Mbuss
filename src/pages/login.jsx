import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';

const logar = async (email, senha) => {
  try {
    const response = await axios.post('http://localhost:3333/login', {
      email,
      senha,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Estado para controlar se o usuário é admin

  useEffect(() => {
    // Verifica se o usuário foi autenticado como admin ao carregar a página
    const adminStatus = localStorage.getItem('isAdmin');
    if (adminStatus === 'true') {
      setIsAdmin(true); // Define como admin caso esteja no localStorage
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !senha) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      const response = await logar(email, senha);
      console.log('Login realizado com sucesso:', response);

      if (response.success === true) {
        // Salva os dados do usuário no localStorage
        localStorage.setItem('userData', JSON.stringify(response.user));
        localStorage.setItem('isLoggedIn', 'true'); // Marca o usuário como logado

        // Verifica se o usuário é administrador
        if (email === 'adm@gmail.com' && senha === 'adm123') {
          localStorage.setItem('isAdmin', 'true'); // Salva no localStorage que é admin
          setIsAdmin(true);
          navigate('/conta'); // Redireciona para a página de conta de administrador
        } else {
          localStorage.setItem('isAdmin', 'false'); // Define como usuário comum
          setIsAdmin(false);
          navigate('/'); // Redireciona para a página inicial
        }
      } else {
        alert('Email ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      alert('Erro ao tentar realizar login. Tente novamente.');
    }
  };

  return (
    <>
      <div className="img-logo pt-2">
        <a href="/">
          <img src={logo} className="w-[250px] h-auto m-auto" alt="Logo" />
        </a>
      </div>
      <div className="login-container">
        <div className="tCadastro">
          <h1 className="text-2xl mb-2">Login</h1>
        </div>
        <input
          placeholder="Email"
          required
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-login rounded-[20px] mt-2 mb-1"
        />
        <br />
        <input
          placeholder="Senha"
          type="password"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input-login rounded-[20px] mt-2 mb-4"
        />
        <button className="botao-login" onClick={handleLogin}>
          Login
        </button>
        <a href="/cadastro">Não possui conta? Cadastre-se</a>
      </div>
    </>
  );
}

export default Login;