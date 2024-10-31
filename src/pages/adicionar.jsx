import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/adicionar.css'

function ProductRegistration() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState(null);
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
        productName,
        description,
        size,
        image,
      });
      alert('Produto cadastrado com sucesso!');
    };
  
    return (
      <div className="container">
        <h2>Cadastro de Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome do Produto:</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Descrição:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Tamanho:</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            >
              <option value="" disabled>Selecione o tamanho</option>
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
            </select>
          </div>
          <div className="form-group">
            <label>Imagem do Produto:</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          <button type="submit" className="submit-button">
            Cadastrar Produto
          </button>
        </form>
      </div>
    );
  }
  
  export default ProductRegistration;   

