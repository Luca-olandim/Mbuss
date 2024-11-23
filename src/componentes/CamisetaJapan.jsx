import React, { useState } from 'react';
import '../App.css';
import heartEmpty from '../images/heart-empty.png';
import heartFilled from '../images/heart-filled.png';
import CamisetaGrito from '../images/CamisetaGrito.png'

function CamisetaJapan({ isFavorito = false }) { // Set default isFavorito to false

  const [isFavorited, setIsFavorited] = useState(isFavorito); // Use state to manage icon state

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited); // Toggle isFavorited on click
  };

  return (
    <>
      <div className='w-[15%] relative'>
        <a href="/produto"><img
          className="d-block w-full    bg-gray-300"
          src= {CamisetaGrito}
          alt="Produto"
        /></a>

        {/* Ícone de coração posicionado no canto superior direito */}
        <div
          className="favorite-icon-container absolute top-2 right-2 cursor-pointer"
          onClick={handleFavoriteClick} // Add onClick handler
        >
          <img
            src={isFavorited ? heartFilled : heartEmpty} // Choose image based on state
            alt="Ícone de favorito"
            className="favorite-icon"
          />
        </div>

        <div className='descricao-p w-full'>
          <div className='flex justify-between items-center p-2'>
            <p className='ml-2'>SCREAM MBUSS BLACK TEE </p>
            <p className='text-end mr-1'>R$189,90</p>
          </div>
        </div>
        <button className="botao-add-carrinho mt-2" type='submit'>Adicionar ao Carrinho</button>
      </div>
    </>
  );
}

export default CamisetaJapan;