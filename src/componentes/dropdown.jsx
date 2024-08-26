import React, { useState } from 'react';

function SizeDropdown() {
  const [selectedSize, setSelectedSize] = useState('');

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <label htmlFor="size">Escolha o tamanho: </label>
      <select id="size" value={selectedSize} onChange={handleChange}>
        <option value="" disabled>Selecione um tamanho</option>
        <option value="P">P</option>
        <option value="M">M</option>
        <option value="G">G</option>
        <option value="GG">GG</option>
      </select>
      {selectedSize && <p>Tamanho selecionado: {selectedSize}</p>}
    </div>
  );
}

export default SizeDropdown;