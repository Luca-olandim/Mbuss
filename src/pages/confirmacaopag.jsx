import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo2 from '../images/logo.jpg';
import check from '../images/verificado.png';
import '../css/confirmacaopag.css';

function Confirmacaopag() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); 
   }, 2500); // 2,5 segundos

   return () => clearTimeout(timer); 
 }, [navigate]);

  return (
    <div className='main'>
      <div className='logo'>
        <a href='/'><img src={logo2} alt='Logo' className='logo-img' /></a>
      </div>
      <img src={check} alt='Check' className='check-img' />
      <h1 className='message-text'>Pagamento Concluído! Obrigado pela Compra.</h1>
    </div>
  );
}

export default Confirmacaopag;
