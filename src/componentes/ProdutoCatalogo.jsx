import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/catalogo.css';
import coracao from '../images/coracao.svg'; // Caminho para o ícone

function ProdutoCatalogo() {
  const [produtos, setProdutos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);  // Adiciona o estado para os favoritos
  const [error, setError] = useState('');

  useEffect(() => {
    // Carregar produtos
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

    // Carregar favoritos do localStorage
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  const handleAddToFavorites = (produto) => {
    // Adiciona o produto aos favoritos
    setFavoritos((prevFavoritos) => {
      const novosFavoritos = [...prevFavoritos, produto];
      localStorage.setItem('favoritos', JSON.stringify(novosFavoritos)),alert('Produto adicionado aos favoritos com sucesso!'); // Salva no localStorage
      return novosFavoritos;


    });
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

          <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />

          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>

          <p><strong>R$ {produto.valor.toFixed(2)}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default ProdutoCatalogo;