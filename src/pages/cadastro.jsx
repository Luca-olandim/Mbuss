import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from  '../images/logo.jpg'

function Cadastro(){
    const navigate = useNavigate()
    const [novoUsuario, setNovousuario] = useState({
    username: '',
    password: '',
    });
    
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovousuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };  
  //POST
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/api', novoUsuario);
      setNovousuario({
        username: '',
        password: '',
        });
    navigate("/")    
    } catch (error) {
      console.error('Erro ao criar usuario:', error);
    }
  };

  return (
    <>
    <div className='img-logo'>
      <img src={logo}></img>
    </div>
    <div div className='casdastro-container'>
      <div className='tCadastro'>
        <h1>Cadastrar Usuário</h1>
      </div>
      <form onSubmit={handleSubmit}>
       <div>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={novoUsuario.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
              <input
              type="text"
              name="password"
              placeholder="Senha"
              value={novoUsuario.password}
              onChange={handleInputChange}
              />
          </div>

       </div>
        <button type="submit">Cadastrar</button>
        <a className='link-login'>Possui Cadastro? Logar</a>
      </form>
    </div>
    </>
    );
  }

export default Cadastro;