import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/carrinho.css';
import logo from '../images/logo.jpg';
import casaco from '../images/casaco.png';
import Stepper from '../componentes/stepper';

const Carrinho = () => {
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [cupom, setCupom] = useState('');

  const pricePerItem = 150.0;
  const subtotal = quantity * pricePerItem;
  const total = subtotal + frete - discount;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleCalculateFrete = async () => {
    if (!cep.trim()) {
      alert('Campo frete é obrigatório');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        alert('CEP não encontrado.');
        setIsLoading(false);
        return;
      }

      const calculatedFrete = Math.random() * (30 - 10) + 10; // Entre R$10 e R$30
      setFrete(parseFloat(calculatedFrete.toFixed(2)));
    } catch (error) {
      alert('Erro ao calcular frete. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyDiscount = () => {
    if (cupom === 'SENNA15') {
      const desconto = subtotal * 0.15; // 15% de desconto
      setDiscount(desconto);
      alert(`Cupom aplicado!`);
    } else {
      setDiscount(0);
      alert('Cupom inválido.');
    }
  };

  return (
    <div className="cart-container">
      <header className="header">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <Stepper />
      </header>
      <main className="cart-main">
        <div className="product-info">
          <img src={casaco} alt="Produto" className="casaco" />
          <div className="product-details">
            <div className="quantity">
              <span>Quantidade:</span> <br />
              <div className="counters">
                <button id="minusproductbutton" onClick={decreaseQuantity}>
                  -
                </button>
                <span id="quantitynumber">{quantity}</span>
                <button id="addproductbutton" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
            <div className="price">
              <div className="price-piece">
                <span>Valor por peça: <br /> R${pricePerItem.toFixed(2)}</span>
              </div>
              <div className="price-total">
                <span>
                  Subtotal: <br /> R${subtotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="disc-main">
          <div className="disc-delivery">
            <div className="discount">
              <label>Cupom de Desconto</label>
              <input
                type="text"
                placeholder="CUPOM"
                value={cupom}
                onChange={(e) => setCupom(e.target.value)}
              />
              <button onClick={handleApplyDiscount}>Aplicar</button>
            </div>
            <div className="delivery">
              <label>Calcular Frete</label>
              <input
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                  const formattedValue = value.replace(/(\d{5})(\d+)/, '$1-$2'); // Adiciona o hífen após 5 números
                  setCep(formattedValue);
                }}
              />
              <button onClick={handleCalculateFrete} disabled={isLoading}>
                {isLoading ? 'Calculando...' : 'Calcular'}
              </button>
            </div>
          </div>
          <div className="summary">
            <h3>Resumo da Compra</h3>
            <p>Valor do produto: R${pricePerItem.toFixed(2)}</p>
            <p>Frete: R${frete.toFixed(2)}</p>
            <p>Desconto: R${discount.toFixed(2)}</p>
            <p>Valor Total: R${total.toFixed(2)}</p>
          </div>
        </div>
      </main>

      <button
        className="continue"
        onClick={(e) => {
          e.preventDefault(); // Impede qualquer comportamento padrão do navegador
          if (frete === 0) {
            alert('Calcule o frete antes de continuar.');
          } else {
            localStorage.setItem('valorTotal', total.toFixed(2));
            window.location.href = '/pagamento'; // Navega para a página
          }
        }}
      >
        Continuar
      </button>
    </div>
  );
};

export default Carrinho;
