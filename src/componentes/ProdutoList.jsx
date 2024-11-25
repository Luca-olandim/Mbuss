import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/ProdutoList.css';

function ProdutoList() {
  const [produtos, setProdutos] = useState([]);
  const [editingProduto, setEditingProduto] = useState(null);
  const [error, setError] = useState('');

  // Carregar produtos da API
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
  }, []);

  // Atualizar produto
  const handleUpdateProduto = async (produtoId) => {
    try {
      await axios.put(`http://localhost:3333/produtos/${produtoId}`, editingProduto);
      setProdutos(produtos.map((produto) =>
        produto.id_produto === produtoId ? editingProduto : produto
      ));
      setEditingProduto(null);  // Fechar o formulário de edição
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao atualizar produto.');
    }
  };

  // Adicionar um novo produto (exemplo de função)
  const handleAddProduto = async (novoProduto) => {
    try {
      const response = await axios.post('http://localhost:3333/produtos', novoProduto);
      // Adiciona o novo produto ao estado sem precisar recarregar
      setProdutos(prevProdutos => [...prevProdutos, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      alert('Erro ao adicionar produto.');
    }
  };

  // Cancelar edição
  const handleCancelEdit = () => {
    setEditingProduto(null);  // Fechar o formulário de edição
  };

  // Excluir produto
  const handleDeleteProduto = async (produtoId) => {
    try {
      await axios.delete(`http://localhost:3333/produtos/${produtoId}`);
      setProdutos(produtos.filter(produto => produto.id_produto !== produtoId));
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      alert('Erro ao excluir produto.');
    }
  };

  // Manipulador de mudanças nos inputs de edição
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditingProduto((prevProduto) => ({
      ...prevProduto,
      [name]: value,
    }));
  };

  return (
    <div className="produto-list">
      <h1 className="text-2xl mb-4 text-black">Lista de Produtos</h1>
      {error && <p>{error}</p>}
      <div className="produtos-container">
        {produtos.map((produto) => (
          <div key={produto.id_produto} className="produto-item">
            {editingProduto && editingProduto.id_produto === produto.id_produto ? (
              // Exibição do formulário de edição inline
              <div className="edit-form">
                <input
                  type="text"
                  name="nome"
                  value={editingProduto.nome}
                  onChange={handleEditChange}
                  className="input-form"
                />
                <input
                  type="text"
                  name="tamanho"
                  value={editingProduto.tamanho}
                  onChange={handleEditChange}
                  className="input-form"
                />
                <input
                  type="number"
                  name="valor"
                  value={editingProduto.valor}
                  onChange={handleEditChange}
                  className="input-form"
                />
                <input
                  type="number"
                  name="quantidade"
                  value={editingProduto.quantidade}
                  onChange={handleEditChange}
                  className="input-form"
                />
                <textarea
                  name="descricao"
                  value={editingProduto.descricao}
                  onChange={handleEditChange}
                  className="input-form"
                />
                <input
                  type="text"
                  name="imagem"
                  value={editingProduto.imagem}
                  onChange={handleEditChange}
                  className="input-form"
                  placeholder="URL da Imagem"
                />
                <button
                  onClick={() => handleUpdateProduto(produto.id_produto)}
                  className="botao"
                >
                  Salvar
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="botao"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              // Exibição normal do produto
              <div>
                <img
                  src={produto.imagem || 'https://via.placeholder.com/300'}
                  alt={produto.nome}
                  className="produto-imagem"
                />
                <h3>{produto.nome}</h3>
                <p>Valor: R$ {produto.valor}</p>
                <div className="actions">
                  <button onClick={() => setEditingProduto(produto)} className="botao">Editar</button>
                  <button onClick={() => handleDeleteProduto(produto.id_produto)} className="botao">Excluir</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProdutoList;
