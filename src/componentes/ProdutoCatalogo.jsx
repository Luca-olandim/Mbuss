import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/catalogo.css';
import coracao from '../images/coracao.svg'; // Caminho para o ícone

function ProdutoCatalogo() {
  const [produtos, setProdutos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await axios.get('http://localhost:3333/produtos');
        setProdutos(response.data);
      } catch (error) {
        setError('Erro ao carregar produtos.');
        console.error('Erro ao carregar produtos:', error);
      }
    }

    fetchProdutos();

    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  const handleAddToFavorites = (produto) => {
    setFavoritos((prevFavoritos) => {
      const novosFavoritos = [...prevFavoritos, produto];
      localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
      alert('Produto adicionado aos favoritos com sucesso!');
      return novosFavoritos;
    });
  };

  const handleAddToCart = async (produto) => {
    try {
      const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
      const novoCarrinho = [...carrinhoAtual, produto];
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
      alert('Produto adicionado ao carrinho com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      alert('Erro ao adicionar ao carrinho.');
    }
  };

  const handleNavigateToProduto = (idProduto) => {
    navigate(`/produto/${idProduto}`); // Navega para a página de detalhes do produto
  };

  return (
    <div className="produto-catalogo">
      {error && <p>{error}</p>}
      {produtos.map((produto) => (
        <div key={produto.id_produto} className="produto-item">
          <div 
            className="favorito-icon" 
            onClick={() => handleAddToFavorites(produto)}
          >
            <img src={coracao} alt="Adicionar aos Favoritos" />
          </div>
          <img 
            src={produto.imagem} 
            alt={produto.nome} 
            className="produto-imagem" 
            onClick={() => handleNavigateToProduto(produto.id_produto)} // Navega ao clicar na imagem
            style={{ cursor: 'pointer' }}
          />
          <h3
            onClick={() => handleNavigateToProduto(produto.id_produto)} // Navega ao clicar no nome
            style={{ cursor: 'pointer' }}
          >
            {produto.nome}
          </h3>
          <p><strong>R$ {produto.valor.toFixed(2)}</strong></p>
          <button 
            onClick={() => handleAddToCart(produto)} 
            className="botao"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProdutoCatalogo;
