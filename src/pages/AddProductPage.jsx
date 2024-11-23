import React from 'react';
import AddProductForm from '../componentes/AddProductForm';
import axios from 'axios';

const AddProductPage = () => {
  const handleFormSubmit = async (formData) => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:3000/produtos', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(`Produto adicionado com ID: ${response.data.id_produto}`);
    } catch (error) {
      console.error(error);
      alert('Erro ao adicionar produto.');
    }
  };

  return (
    <div>
      <AddProductForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddProductPage;
