import React, { useState } from 'react';
import '../css/catalogo.css';
import heartEmpty from '../images/heart-empty.png';
import heartFilled from '../images/heart-filled.png';
import CamisetaVermelhaIMG from '../images/camisetaVermelha.png';

function CamisetaVermelha({ isFavorito = false }) {
  const [isFavorited, setIsFavorited] = useState(isFavorito);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritosSalvos.some(produto => produto.nome === 'SCREAM MBUSS BLACK TEE')) {
      favoritosSalvos.push({
        nome: 'SCREAM MBUSS BLACK TEE',
        imagem: CamisetaVermelhaIMG,
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
      <a href="/produtocamisetavermelha">
        <img
          src={CamisetaVermelhaIMG}
          alt="Camiseta Vermelha"
          className="produto-imagem"
        />
      </a>

      {/* Nome e preço */}
      <h3>SCREAM MBUSS BLACK TEE</h3>
      <p><strong>R$ 189,90</strong></p>

      {/* Botão de adicionar ao carrinho */}
      <button className="botao" type="submit">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default CamisetaVermelha;
