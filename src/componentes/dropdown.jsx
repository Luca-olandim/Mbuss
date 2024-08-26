import React, { useState } from 'react';
import '../App.css'

function SizeDropdown() {
  const [selectedSize, setSelectedSize] = useState('');

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div>
      <select id="dropdownsizes" value={selectedSize} onChange={handleChange}>
        <option value="" disabled>Selecione um tamanho</option>
        <option value="P">P</option>
        <option value="M">M</option>
        <option value="G">G</option>
      </select>
    </div>
  );
}

export default SizeDropdown;