import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Navbar from '../componentes/navbar';
import Visa from '../images/visa.png';
import Oversized from '../images/oversized.png';
function Conta(){

    return(
        <>
            <Navbar/>
            <div className='catalogo'>
                <a href="#" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Conta</a>
            </div>
            <div className='text-center m-auto  mt-5'>
                <h1 className='info-conta m-auto  bg-black text-white w-1/2 h-12 flex justify-center items-center'>Minhas Informações</h1>
                <div className='desc-conta m-auto   bg-customGray w-1/2 h-28 text-left'>
                    <p>Nome: João Pedro </p>
                    <p>CPF: 12345676</p>
                    <p>Celular: 48 9876354</p>
                    <p>Endereço: R. Onde o vento faz a curva</p>
                </div>
            </div>
            <div className='text-center m-auto mt-5'>
                <h1 className='info-conta m-auto bg-black text-white w-1/2 h-12 flex justify-center items-center'>Meus Pedidos   </h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left '>
                    <p>CAMISETA BASIC SUPER OVERSIZED WHITE</p>
                    <p>R$ 150,00</p>
                    <p>-Aguardando Pagamento</p>
                    <img src={Oversized} alt="Camiseta Oversized"/>
                </div>
            </div>
            <div className='text-center m-auto mt-5'>
                <h1 className='info-conta m-auto bg-black text-white w-1/2 h-12 flex justify-center items-center'>Métodos de Pagamento</h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left '>
                    <p>Cartão de Crédito: 8765 7645 4234 8123</p>
                    <img src={Visa} alt="Visa logo" />
                </div>
            </div>
        </>
    )
}
export default Conta