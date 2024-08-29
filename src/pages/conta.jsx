import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Navbar from '../componentes/navbar';
function Conta(){

    return(
        <>
            <Navbar/>
            <div className='catalogo'>
                <a href="#" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Conta</a>
            </div>
            <div className='text-center mt-5'>
                <h1 className='info-conta bg-black text-white w-1/2 h-12 flex justify-center items-center'>Minhas Informações</h1>
                <div className='desc-conta bg-customGray w-1/2 h-28 text-left '>
                    <p>Nome: </p>
                    <p>CPF: </p>
                </div>
            </div>
            <div className='text-center mt-5'>
                <h1 className='info-conta bg-black text-white w-1/2 h-12 flex justify-center items-center'>Meus Pedidos   </h1>
                <div className='desc-conta bg-customGray w-1/2 h-28 text-left '>
                </div>
            </div>
            <div className='text-center mt-5'>
                <h1 className='info-conta bg-black text-white w-1/2 h-12 flex justify-center items-center'>Métodos de Pagamento</h1>
                <div className='desc-conta bg-customGray w-1/2 h-28 text-left '>
                </div>
            </div>
        </>
    )
}
export default Conta