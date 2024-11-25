import React, { useState, useEffect } from 'react';
import '../css/carrinho.css';
import logo from '../images/logo.jpg';


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

  const [carrinho, setCarrinho] = useState([]);

useEffect(() => {
  // Carregar produtos do carrinho ao montar o componente
  const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
  setCarrinho(carrinhoSalvo);
}, []);


return (
  <div className="cart-container">
    <header className="header">
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
    </header>
    <main className="cart-main">
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        carrinho.map((produto, index) => (
          <div key={index} className="product-info">
            <img src={produto.imagem} alt={produto.nome} className="casaco" />
            <div className="product-details">
              <h4>{produto.nome}</h4>
              <p>{produto.descricao}</p>
              <p><strong>R$ {produto.valor.toFixed(2)}</strong></p>
            </div>
          </div>
        ))
      )}
    </main>
    <button
      className="continue"
      onClick={() => alert('Processando para pagamento!')}
    >
      Continuar para o pagamento
    </button>
  </div>
);

};

export default Carrinho;
