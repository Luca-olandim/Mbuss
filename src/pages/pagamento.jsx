import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/pagamento.css';
import logo from  '../images/logo.jpg';
import Stepper from '../componentes/stepper';

function Pagamento() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [valorTotal, setValorTotal] = useState("0.00");

  useEffect(() => {
    const total = localStorage.getItem('valorTotal');
    if (total) {
      setValorTotal(total);
    }
  }, []);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <>
      <div className='img-logo pt-2'>
        <a href='/'><img src={logo} className='w-[250px] h-auto m-auto'></img></a>
      </div>
      <Stepper />
      <div className="payment-container">
        <div className="payment-selection">
          <h3>Selecione o Método de Pagamento</h3>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="Pix"
                className='input-radio'
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
        <div className='mr-5'>
          <div className="total-amount mr-4">
            <h3>Valor total</h3>
            <p className='valorTOTAL '>R${valorTotal}</p>
          </div>
          <div className="button-container">
            <a href="/confirmacaopag"><button className="buy-button mb-2">Comprar</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagamento;
