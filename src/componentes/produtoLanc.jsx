import React, { useState, useEffect } from 'react';
import '../css/catalogo.css';
import { useNavigate } from 'react-router-dom';
import coracao from '../images/coracao.svg';
import CamisetaJapan from '../images/CamisetaJapan.png';

function ProdutoLanc() {
  const [favoritos, setFavoritos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  const handleAddToFavorites = (produto) => {
    const produtoExistente = favoritos.some(fav => fav.id_produto === produto.id_produto);
    if (produtoExistente) {
      alert('Este produto já está nos favoritos!');
      return;
    }

    const novosFavoritos = [...favoritos, produto];
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    setFavoritos(novosFavoritos);
    alert('Produto adicionado aos favoritos com sucesso!');
  };

  const produto = {
    id_produto: '2',
    nome: 'URBAN NIGHTLIFE BLACK TEE',
    imagem: CamisetaJapan,
    valor: 189.90,
  };

  const handleNavigateToProduto = () => {
    navigate('/produtocamisetajapan');
  };

  return (
    <div className="produto-item">
      <div className="favorito-icon" onClick={() => handleAddToFavorites(produto)}>
        <img src={coracao} alt="Adicionar aos Favoritos" />
      </div>
      <a onClick={handleNavigateToProduto}>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="produto-imagem"
        />
      </a>
      <h3>{produto.nome}</h3>
      <p><strong>R$ {produto.valor.toFixed(2)}</strong></p>
      <button className="botao" type="submit">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProdutoLanc;
