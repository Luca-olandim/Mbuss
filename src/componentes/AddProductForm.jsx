import React, { useState } from 'react';
import '../css/AddProductForm.css';

const AddProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: '',
    tamanho: '',
    valor: '',
    quantidade: '',
    descricao: '',
    imagem: null,
  });

  const [errors, setErrors] = useState({
    valor: '',
    quantidade: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validação para impedir valores negativos
    if (name === 'valor' && value < 0) {
      setErrors((prevErrors) => ({ ...prevErrors, valor: 'O valor não pode ser negativo.' }));
      return;
    } else if (name === 'quantidade' && value < 0) {
      setErrors((prevErrors) => ({ ...prevErrors, quantidade: 'A quantidade não pode ser negativa.' }));
      return;
    }

    // Limpar erros se o valor for válido
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));

    // Atualizar os valores do formulário
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, imagem: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar se os campos com erros estão preenchidos corretamente antes de enviar
    if (errors.valor || errors.quantidade) {
      alert('Corrija os erros antes de enviar o formulário.');
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="form-container mt-32">
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Produto"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tamanho"
          placeholder="Tamanho"
          value={formData.tamanho}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={formData.valor}
          onChange={handleChange}
          required
        />
        {errors.valor && <p className="error-message">{errors.valor}</p>}
        <input
          type="number"
          name="quantidade"
          placeholder="Quantidade"
          value={formData.quantidade}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="url"
          placeholder="URL da imagem"
          onChange={handleChange}
          required
        />
        {errors.quantidade && <p className="error-message">{errors.quantidade}</p>}
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={formData.descricao}
          onChange={handleChange}
          required
        />
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProductForm;
