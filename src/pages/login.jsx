import React, { useState} from 'react';
import axios from 'axios';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import logo from  '../images/logo.jpg'

const logar = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await logar(username, password);
      if(response == true){
        navigate('/home')
      }
      else{
        alert("Usuario ou senha incorretos")
      }
      } catch (error) {
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
      <form>
        <label>
          <input
          placeholder='Usuário'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input-form rounded-[20px] mb-0'
          />
        </label>
        <br />
        <label>
          <input
          placeholder='Senha'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input-form rounded-[20px] mt-1 mb-5'
          />
        </label>
        <button className="botao-login" type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
      <a href="/recuperacao">Esqueceu sua senha?</a>
      <a href='/cadastro'>Não possui conta? Cadastre-se</a>
    </div>
    </>
  );
}

export default Login;