import React, { useState, useEffect } from 'react';
import '../css/catalogo.css';
import Navbar from '../componentes/navbar';


function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    // Carregar favoritos do localStorage
    const favoritosSalvos = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  const handleRemoveFavorite = (produtoId) => {
    const novosFavoritos = favoritos.filter((produto) => produto.id_produto !== produtoId);
    setFavoritos(novosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos)); 
  };

  return (
    <>
    <Navbar/>
    <div className='catalogo gap-40'>
                <a href="/catalogo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
    <div className="produto-catalogo">
      {favoritos.length === 0 ? (
        <p className='mt-64 ml-5'>Você ainda não adicionou produtos aos favoritos.</p>
      ) : (
        favoritos.map((produto) => (
          <div key={produto.id_produto} className="produto-item">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            <h3>{produto.nome}</h3>
            <p><strong>R$ {produto.valor.toFixed(2)}</strong></p>
            <button 
              onClick={() => handleRemoveFavorite(produto.id_produto)} 
              className="botao"
            >
              Remover dos Favoritos
            </button>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default Favoritos;