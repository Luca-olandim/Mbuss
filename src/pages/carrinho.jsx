import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirecionar páginas
import '../css/carrinho.css';
import logo from '../images/logo.jpg';

const Carrinho = () => {
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [cupom, setCupom] = useState('');
  const [carrinho, setCarrinho] = useState([]);

  const navigate = useNavigate(); // Hook para navegação

  const subtotal = carrinho.reduce(
    (total, produto) => total + produto.valor * produto.quantidade,
    0
  );
  const total = subtotal + frete - discount;

  // Carregar produtos do carrinho do localStorage e corrigir quantidade
  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoCorrigido = carrinhoSalvo.map((produto) => ({
      ...produto,
      quantidade: 1, // Define sempre como 1 na carga inicial
    }));
    setCarrinho(carrinhoCorrigido);
  }, []);

  // Alterar quantidade do produto
  const increaseQuantity = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho[index].quantidade += 1;
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const decreaseQuantity = (index) => {
    const novoCarrinho = [...carrinho];
    if (novoCarrinho[index].quantidade > 1) {
      novoCarrinho[index].quantidade -= 1;
      setCarrinho(novoCarrinho);
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    }
  };

  // Remover produto do carrinho
  const handleRemoveFromCart = (index) => {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  // Calcular frete
  const handleCalculateFrete = async () => {
    if (!cep.trim()) {
      alert('Campo CEP é obrigatório');
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

  // Aplicar desconto
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

  // Verificar login ao continuar para o pagamento
  const handleContinueToPayment = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Supondo que você armazene uma chave "isLoggedIn"
    if (isLoggedIn === 'true') {
      navigate('/confirmacaopag'); // Redireciona para a página de confirmação de pagamento
    } else {
      navigate('/login'); // Redireciona para a página de login
    }
  };
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
                <p>
                  <strong>R$ {produto.valor.toFixed(2)}</strong>
                </p>
                <div className="quantity">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{produto.quantidade}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
                <button
                  className="remove-button mt-4"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  Remover do Carrinho
                </button>
              </div>
            </div>
          ))
        )}
      </main>

      <div className="disc-main">
        <div className="disc-delivery">
          <div className="discount">
            <label htmlFor="cupom">Cupom de Desconto</label>
            <input
              type="text"
              id="cupom"
              value={cupom}
              onChange={(e) => setCupom(e.target.value)}
              placeholder="Digite o cupom"
            />
            <button onClick={handleApplyDiscount}>Aplicar</button>
          </div>
          <div className="delivery">
            <label htmlFor="cep">Prazo de Entrega</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Digite o CEP"
            />
            <button onClick={handleCalculateFrete}>
              {isLoading ? 'Calculando...' : 'Calcular'}
            </button>
          </div>
        </div>

        <div className="summary">
          <h3>Resumo da Compra</h3>
          <p>Valor dos Produtos: R$ {subtotal.toFixed(2)}</p>
          <p>Frete: R$ {frete.toFixed(2)}</p>
          <p>Cupom de Desconto: -R$ {discount.toFixed(2)}</p>
          <p>
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </p>
        </div>
      </div>

      <button
        className="continue"
        onClick={handleContinueToPayment}
      >
        Continuar para o pagamento
      </button><br />
    </div>
  );
};

export default Carrinho;
