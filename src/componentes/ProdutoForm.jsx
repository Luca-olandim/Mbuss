import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import '../css/AddProductForm.css';

function ProdutoForm() {
  const navigate = useNavigate();
  const [produto, setProduto] = useState({
    nome: '',
    tamanho: '',
    valor: '',
    quantidade: '',
    descricao: '',
    imagem: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3333/produtos', produto);
      setProduto({
        nome: '',
        tamanho: '',
        valor: '',
        quantidade: '',
        descricao: '',
        imagem: ''
      });
      navigate('/produtosadmin');
    } catch (error) {
      setError('Erro ao salvar produto. Tente novamente.');
      console.error('Erro ao salvar produto:', error);
    }
  };

  return (
    <div className="produto-form-container">
      <div className="produto-form-logo mt-24">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>
      <div className="produto-form-box">
        <h1 className='text-black-600'>Criar Produto</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            value={produto.nome}
            onChange={handleInputChange}
            required
          />
              <select
                name="tamanho"
                value={produto.tamanho}
                onChange={handleInputChange}
                required>
                <option value="" disabled>
                  Selecione o tamanho
                </option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
              </select>
          <input
            type="number"
            name="valor"
            placeholder="Valor"
            value={produto.valor}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="quantidade"
            placeholder="Quantidade"
            value={produto.quantidade}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="descricao"
            placeholder="Descrição"
            value={produto.descricao}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="imagem"
            placeholder="URL da Imagem"
            value={produto.imagem}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Salvar Produto</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default ProdutoForm;
