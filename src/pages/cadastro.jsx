import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.jpg';

function Cadastro() {
  const navigate = useNavigate();
  const [novoUsuario, setNovoUsuario] = useState({
    email: '',
    senha: '',
    nome: '',
    cpf: '',
    telefone: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3333/usuarios', novoUsuario);
      setNovoUsuario({
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        telefone: '',
      });
      setError('');
      navigate('/login');
    } catch (error) {
      setError('Erro ao criar usuário. Tente novamente.');
    }
  };

  return (
    <div className="centralize-tela">
      <div className="img-logo pt-2">
        <a href="/"><img src={logo} className="w-[250px] h-auto m-auto" alt="Logo" /></a>
      </div>
      <div className="casdastro-container">
        <div className="tCadastro">
          <h1 className="text-2xl mb-2">Cadastrar Usuário</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className='inputs-cadastro'>
              <div>
                <input
                  type="text"
                  name="nome"
                  value={novoUsuario.nome}
                  placeholder="Nome"
                  onChange={handleInputChange}
                  className="input-form rounded-[20px] mb-2 w-40"
                />
                <input
                  type="text"
                  name="cpf"
                  value={novoUsuario.cpf}
                  placeholder="CPF"
                  onChange={handleInputChange}
                  className="input-form rounded-[20px] mb-2 w-40"
                />
                <input
                  type="text"
                  name="telefone"
                  value={novoUsuario.telefone}
                  placeholder="Telefone"
                  onChange={handleInputChange}
                  className="input-form rounded-[20px] w-40"
                />
              </div>
              <div className='ml-2'>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={novoUsuario.email}
                  onChange={handleInputChange}
                  className="input-form rounded-[20px] mb-2 w-40"
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={novoUsuario.senha}
                  onChange={handleInputChange}
                  className="input-form rounded-[20px] w-40 mb-2"
                />
                <input
                  type="password"
                  name="senha"
                  placeholder="Repetir Senha"
                  value={novoUsuario.senha}
                  onChange={handleInputChange}
                  className="input-form rounded-[20px] w-40"
                />
              </div>
            </div>
            <button className="botao-login" type="submit">Cadastrar</button>
            <a href="/login" className="link-login">Possui Cadastro? Logar</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
