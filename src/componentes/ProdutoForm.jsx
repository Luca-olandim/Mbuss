import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      // Enviar o produto para o backend
      await axios.post('http://localhost:3333/produtos', produto);
      setProduto({
        nome: '',
        tamanho: '',
        valor: '',
        quantidade: '',
        descricao: '',
        imagem: ''
      });
      navigate('/produtosadmin'); // Redireciona para a página de produtos (ou onde achar adequado)
    } catch (error) {
      setError('Erro ao salvar produto. Tente novamente.');
      console.error('Erro ao salvar produto:', error);
    }
  };

  return (
    <div>
      <h1>Criar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            value={produto.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="tamanho"
            placeholder="Tamanho"
            value={produto.tamanho}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="valor"
            placeholder="Valor"
            value={produto.valor}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="quantidade"
            placeholder="Quantidade"
            value={produto.quantidade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <textarea
            name="descricao"
            placeholder="Descrição"
            value={produto.descricao}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="imagem"
            placeholder="URL da Imagem"
            value={produto.imagem}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Salvar Produto</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default ProdutoForm;