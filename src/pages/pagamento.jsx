import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from  '../images/logo.jpg';
import Stepper from '../componentes/stepper';

function Pagamento(){
    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePaymentChange = (event) => {
      setPaymentMethod(event.target.value);
    };

  return (
    <>
    <div className='img-logo pt-2'>
      <a href='/'><img src={logo} className='w-[250px] h-auto m-auto'></img></a>
    </div>
    <Stepper/>
    <div className="payment-container">
      <div className="payment-selection">
        <h3>Selecione o Método de Pagamento</h3>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment"
              value="Pix"
              checked={paymentMethod === "Pix"}
              onChange={handlePaymentChange}
            />
            Pix
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="Boleto"
              checked={paymentMethod === "Boleto"}
              onChange={handlePaymentChange}
            />
            Boleto
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="Cartão de Crédito"
              checked={paymentMethod === "Cartão de Crédito"}
              onChange={handlePaymentChange}
            />
            Cartão de Crédito
          </label>
        </div>
      </div>
      <div className="total-amount">
        <h3>Valor total</h3>
        <p>$$$$$</p>
      </div>
      <div className="button-container">
        <button className="buy-button">Comprar</button>
      </div>
    </div>
    </>
  );
}

export default Pagamento;