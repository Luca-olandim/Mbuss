import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/catalogo.css';
import coracao from '../images/coracao.svg';  // Imagem do coração para o ícone de favorito
import CamisetaVermelhaIMG from '../images/camisetaVermelha.png';

function CamisetaVermelha() {
  const [favoritos, setFavoritos] = useState([]); // Lista de favoritos
  const navigate = useNavigate();

  // Carregar favoritos do localStorage ao iniciar
  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  const handleAddToFavorites = (produto) => {
    // Verifica se o produto já está nos favoritos
    const produtoExistente = favoritos.some(fav => fav.id_produto === produto.id_produto);
    if (produtoExistente) {
      alert('Este produto já está nos favoritos!');
      return;
    }

    // Adiciona o produto aos favoritos
    const novosFavoritos = [...favoritos, produto];
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    setFavoritos(novosFavoritos);
    alert('Produto adicionado aos favoritos com sucesso!');
  };

  const produto = {
    id_produto: '4',  // Identificador único
    nome: 'SCREAM MBUSS BLACK TEE',
    imagem: CamisetaVermelhaIMG,
    valor: 189.90,
  };

  const handleNavigateToProduto = () => {
    navigate('/produtocamisetavermelha');
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

export default CamisetaVermelha;
