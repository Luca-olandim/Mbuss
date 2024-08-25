import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from  '../images/logo.jpg';
import Navbar from '../componentes/navbar';
import CarroNoCeu from '../componentes/carousel';

function Home(){

return(
    <>
    <Navbar/>
    <CarroNoCeu/>
    <div className='lancamentos text-center mt-5 text-black'>
        <p>Lançamentos</p>
    </div>
    <div className='imgs-lancamentos p-8 flex flex-row justify-center gap-52'>
        <div>
            <img
            className="d-block w-30 h-[306px] bg-gray-300"
            src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
            alt="First slide"
            />
            <div className='descricao-p w-72'>
                <div className='flex justify-between items-center p-2'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
                    <p className='text-end mr-1'>R$150,00</p>
                </div>
            </div>
            <button className="botao-add-carrinho mt-2" type='submit'>Adicionar ao Carrinho</button>
        </div>
        <div>
            <img
            className="d-block w-30 h-[306px] bg-gray-300"
            src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
            alt="First slide"
            />
            <div className='descricao-p w-72'>
                <div className='flex justify-between items-center p-2'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
                    <p className='text-end mr-1'>R$150,00</p>
                </div>
            </div>
            <button className="botao-add-carrinho mt-2" type='submit'>Adicionar ao Carrinho</button>
        </div>
        <div>
            <img
            className="d-block w-30 h-[306px] bg-gray-300"
            src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
            alt="First slide"
            />
            <div className='descricao-p w-72'>
                <div className='flex justify-between items-center p-2'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
                    <p className='text-end mr-1'>R$150,00</p>
                </div>
            </div>
            <button className="botao-add-carrinho mt-2" type='submit'>Adicionar ao Carrinho</button>
        </div>
    </div>
    <div className='imgs-lancamentos p-8 flex flex-row justify-center gap-52 mt-20'>
        <div>
            <img
            className="d-block w-30 h-[306px] bg-gray-300"
            src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
            alt="First slide"
            />
            <div className='descricao-p w-72'>
                <div className='flex justify-between items-center p-2'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
                    <p className='text-end mr-1'>R$150,00</p>
                </div>
            </div>
            <button className="botao-add-carrinho mt-2" type='submit'>Adicionar ao Carrinho</button>
        </div>
        <div>
            <img
            className="d-block w-30 h-[306px] bg-gray-300"
            src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
            alt="First slide"
            />
            <div className='descricao-p w-72'>
                <div className='flex justify-between items-center p-2'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
                    <p className='text-end mr-1'>R$150,00</p>
                </div>
            </div>
            <button className="botao-add-carrinho mt-2" type='submit'>Adicionar ao Carrinho</button>
        </div>
        <div>
            <img
            className="d-block w-30 h-[306px] bg-gray-300"
            src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
            alt="First slide"
            />
            <div className='descricao-p w-72'>
                <div className='flex justify-between items-center p-2'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
                    <p className='text-end mr-1'>R$150,00</p>
                </div>
            </div>
            <button className="botao-add-carrinho mt-2" type='submit'>Adicionar ao Carrinho</button>
        </div>
    </div>
    </>
    );

} 
export default Home;
