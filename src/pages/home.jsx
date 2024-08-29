import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from '../images/logo.jpg';
import Navbar from '../componentes/navbar';
import CarroNoCeu from '../componentes/carousel';
import ProdutoLanc from '../componentes/produtoLanc';

function Home() {

    return (
        <>
            <Navbar />
            <div className='catalogo'>
                <a href="#" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <CarroNoCeu />
            <div className='lancamentos text-center mt-5 text-black'>
                <p>Lançamentos</p>
            </div>
            <div className='imgs-lancamentos p-8 flex flex-row justify-center flex-wrap gap-52'>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
            </div>
        </>
    );

}
export default Home;
