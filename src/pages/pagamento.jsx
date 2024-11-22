import React, { useState, useEffect } from 'react';
import '../css/pagamento.css';
import logo from '../images/logo.jpg';
import Stepper from '../componentes/stepper';
import '../App.css';

function Pagamento() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [valorTotal, setValorTotal] = useState("0.00");
  const [inputsCartao, setCartao] = useState("");

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
            <div>
              {
                paymentMethod === "Cartão de Crédito" ?
                  (
                    <>
                      <div className='mt-2 mb-3'>
                        <input
                          type='text'
                          name='numero cartao'
                          placeholder='Nº do Cartão'>
                        </input>
                      </div>
                      <div className='mb-3'>
                        <input
                          type='text'
                          name='nome do titular'
                          placeholder='Nome do Titular'>
                        </input>
                      </div>
                      <div className='mb-3'>
                        <input
                          type='text'
                          name='vencimento cartao'
                          placeholder='Vencimento do Cartão'>
                        </input>
                      </div>
                      <div className='mb-3'>
                        <input
                          type='text'
                          name='nome do titular'
                          placeholder='Código de Segurança'>
                        </input>
                      </div>
            </>
            ) : null
          }
          </div>
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
