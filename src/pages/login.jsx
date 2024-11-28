import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';

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
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Estado para controlar se o usuário é admin

  useEffect(() => {
    // Verifica se o usuário foi autenticado como admin ao carregar a página
    const adminStatus = localStorage.getItem("é adm?");
    if (adminStatus === "true") {
      setIsAdmin(true); // Se estiver salvo como admin, define como true
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }
    try {
      const response = await logar(email, senha);
      console.log("Login realizado com sucesso:", response);
      if (response.success === true) {
        localStorage.setItem("dados usuario", JSON.stringify(response.user));
        localStorage.setItem("isLoggedIn", "true"); // Adicionado: salva o estado de login

        // Verifica se é um administrador
        if (email === "adm@gmail.com" && senha === "adm123") {
          localStorage.setItem("é adm?", "true"); // Salva no localStorage que o usuário é admin
          setIsAdmin(true); // Define que o usuário é admin
          navigate('/conta'); // Redireciona diretamente para a página de conta
        } else {
          setIsAdmin(false); // Caso não seja admin, garante que o botão não seja exibido
          navigate('/'); // Redireciona para a página inicial para usuários comuns
        }
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };

  return (
    <>
      <div className='img-logo pt-2'>
        <a href='/'><img src={logo} className='w-[250px] h-auto m-auto' alt="Logo"></img></a>
      </div>
      <div className='login-container'>
        <div className='tCadastro'>
          <h1 className='text-2xl mb-2'>Login</h1>
        </div>
        <input
          placeholder='Email'
          required
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input-login rounded-[20px] mt-2 mb-1'
        />
        <br />
        <input
          placeholder='Senha'
          type="password"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className='input-login rounded-[20px] mt-2 mb-4'
        />
        <button className="botao-login" onClick={handleLogin}>
          Login
        </button>
        <a href='/cadastro'>Não possui conta? Cadastre-se</a>
      </div>
    </>
  );
}

export default Login;
