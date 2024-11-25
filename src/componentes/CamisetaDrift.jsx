import React, { useState } from 'react';
import '../css/catalogo.css';
import heartEmpty from '../images/heart-empty.png';
import heartFilled from '../images/heart-filled.png';
import CamisetaDriftIMG from '../images/CamisetaDRIFT.png';

function CamisetaDrift({ isFavorito = false }) {
  const [isFavorited, setIsFavorited] = useState(isFavorito);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritosSalvos.some(produto => produto.nome === 'SCREAM MBUSS BLACK TEE')) {
      favoritosSalvos.push({
        nome: 'SCREAM MBUSS BLACK TEE',
        imagem: CamisetaDriftIMG,
        valor: 189.90
      });
      localStorage.setItem('favoritos', JSON.stringify(favoritosSalvos));
      alert('Produto adicionado aos favoritos com sucesso!');
    }
  };

  return (
    <div className="produto-item">
      <div 
        className="favorito-icon"
        onClick={handleFavoriteClick}
      >
        <img
          src={isFavorited ? heartFilled : heartEmpty}
          alt="Ícone de favorito"
        />
      </div>

      <a href="/produtocamisetadrift">
        <img
          src={CamisetaDriftIMG}
          alt="Camiseta Drift"
          className="produto-imagem"
        />
      </a>

      <h3>SCREAM MBUSS BLACK TEE</h3>
      <p>Camisa preta com estampa SCREAM MBUSS</p>
      <p><strong>R$ 189,90</strong></p>

      <button className="botao" type="submit">Adicionar ao Carrinho</button>
    </div>
  );
}

export default CamisetaDrift;
