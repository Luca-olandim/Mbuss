import React, { useState } from 'react';
import '../css/catalogo.css'; // Atualize o caminho para o CSS, se necessário
import heartEmpty from '../images/heart-empty.png';
import heartFilled from '../images/heart-filled.png';
import CamisetaJapan from '../images/CamisetaJapan.png';

function ProdutoLanc({ isFavorito = false }) {
  const [isFavorited, setIsFavorited] = useState(isFavorito);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritosSalvos.some(produto => produto.nome === 'URBAN NIGHTLIFE BLACK TEE')) {
      favoritosSalvos.push({
        nome: 'URBAN NIGHTLIFE BLACK TEE',
        imagem: CamisetaJapan,
        valor: 189.90,
      });
      localStorage.setItem('favoritos', JSON.stringify(favoritosSalvos));
      alert('Produto adicionado aos favoritos com sucesso!');
    }
  };

  return (
    <div className="produto-item">
      {/* Ícone de favorito */}
      <div 
        className="favorito-icon"
        onClick={handleFavoriteClick}
      >
        <img
          src={isFavorited ? heartFilled : heartEmpty}
          alt="Ícone de favorito"
        />
      </div>

      {/* Imagem do produto */}
      <a href="/produtocamisetajapan">
        <img
          src={CamisetaJapan}
          alt="Camiseta Japan"
          className="produto-imagem"
        />
      </a>

      {/* Nome e preço */}
      <h3>URBAN NIGHTLIFE BLACK TEE</h3>
      <p><strong>R$ 189,90</strong></p>

      {/* Botão de adicionar ao carrinho */}
      <button className="botao" type="submit">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProdutoLanc;
