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
    <div className='img-logo pt-2'>
      <a href="/"><img src={logo} className='w-[250px] h-auto m-auto'></img></a>
    </div>
    <div div className='casdastro-container'>
      <div className='tCadastro '>
        <h1 className='text-2xl mb-2'>Cadastrar Usuário</h1>
      </div>
        <form onSubmit={handleSubmit}>
        <div className='flex  '>
          <div>
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome Completo"
                onChange={handleInputChange}
                className='input-form rounded-[20px]'
              />
            </div>
            <div className='input-cpf'>
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                onChange={handleInputChange}
                className='input-form rounded-[20px]'
              />
            </div>
          </div>
          <div className='ml-10'>
          <div>
              <input
                type="text"
                name="username"
                placeholder="Email"
                value={novoUsuario.username}
                onChange={handleInputChange}
                className='input-form rounded-[20px]'
              />
          </div>
          <div>
              <input
              type="password"
              name="password"
              placeholder="Senha"
              value={novoUsuario.password}
              onChange={handleInputChange}
              className='input-form rounded-[20px]'
              />
            </div>
            <div>
              <input
              type="password"
              name="password2"
              placeholder="Confirmar senha"
              className='input-form rounded-[20px]'>
              </input>
            </div>
          </div>
          </div>
          <button className="botao-login" type="submit">Cadastrar</button>
          <a href='/login' className='link-login' >Possui Cadastro? Logar</a>
        </form>
      </div>
    </>
  );
}

export default Cadastro;