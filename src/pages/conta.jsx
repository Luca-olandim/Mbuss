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
                    <p className='ml-2'>Nome: João Pedro </p>
                    <p className='ml-2'>CPF: 12345676</p>
                    <p className='ml-2'>Celular: 48 9876354</p>
                    <p className='ml-2'>Endereço: R. Onde o vento faz a curva</p>
                </div>
            </div>
            <div className='text-center m-auto mt-5'>
                <h1 className='info-conta m-auto bg-black text-white w-1/2 h-12 flex justify-center items-center'>Meus Pedidos   </h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE</p>
                    <p className='ml-2'>R$ 150,00</p>
                    <p className='ml-2'>-Aguardando Pagamento</p>
                </div>
            </div>
            <div className='text-center m-auto mt-5'>
                <h1 className='info-conta m-auto bg-black text-white w-1/2 h-12 flex justify-center items-center'>Métodos de Pagamento</h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left '>
                    <p className='ml-2'>Cartão de Crédito: 8765 7645 4234 8123</p>
                </div>
            </div>
        </>
    )
}
export default Conta