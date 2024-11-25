import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/produto.css';

function ProdutoDetalhe() {
  const { id } = useParams(); // Obtém o ID do produto pela URL
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function fetchProduto() {
      try {
        const response = await axios.get(`http://localhost:3333/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao carregar detalhes do produto:', error);
      }
    }
    fetchProduto();
  }, [id]);

  if (!produto) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="produto-container josefin-sans">
      <img
        className="img-produto"
        src={produto.imagem || 'https://via.placeholder.com/300'}
        alt={produto.nome}
      />
      <div className="descricao-produto">
        <h1>{produto.nome}</h1>
        <p>{produto.descricao}</p>
        <p id="preco">R$ {produto.valor}</p>
        <div className="modificadores">
          <select>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
          </select>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <button className="comprar">Comprar</button>
      </div>
    </div>
  );
}

export default ProdutoDetalhe;
