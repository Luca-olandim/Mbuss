import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/carrinho.css'
import logo from  '../images/logo.jpg'
import casaco from  '../images/casaco.png'
import Stepper from '../componentes/stepper'

const Carrinho = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 150.00;
  const total = quantity * pricePerItem;

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="cart-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo"/>
        <Stepper/>
      </header>
      <main className="cart-main">
        <div className="product-info">
          <img src={casaco} alt="Produto" className="casaco"/>
          <div className="product-details">
            <div className="quantity">
              <span>Quantidade:</span> <br />
              <div className='counters'>
                <button id='minusproductbutton' onClick={decreaseQuantity}>-</button>
                <span id='quantitynumber'>{quantity}</span>
                <button id='addproductbutton' onClick={increaseQuantity}>+</button>
              </div>
            </div>
            <div className="price">
              <div className='price-piece'>
                <span>Valor por peça: <br /> R${pricePerItem.toFixed(2)}</span>
              </div>
              <div className='price-total'>
                <span>Valor total: <br /> R${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='disc-main'>
          <div className='disc-delivery'>
            <div className="discount">
              <label>Cupon de Desconto</label>
              <input type="text" />
              <button>Aplicar</button>
            </div>
            <div className="delivery">
              <label>Prazo de Entrega</label>
              <input type="text" placeholder="CEP"/>
              <button>Calcular</button>
            </div>
          </div>
          <div className="summary">
            <h3>Resumo da Compra</h3>
            <p>Valor do produto: R${pricePerItem.toFixed(2)}</p>
            <p>Frete: R$0.00</p>
            <p>Cupom de desconto: R$0.00</p>
            <p>Valor Total: R${total.toFixed(2)}</p>
          </div>
        </div>
      </main>
    
      <a href="/pagamento"><button className="continue">Continuar</button><br /></a>
  </div>
  );
};

export default Carrinho;