import React, { useState } from 'react';
import '../App.css'
import Navbar from '../componentes/navbar';
import CarroNoCeu from '../componentes/carousel';
import ProdutoLanc from '../componentes/produtoLanc';
import CamisetaJapan from '../componentes/CamisetaJapan';
import CamisetaDrift from '../componentes/CamisetaDrift';
import CamisetaVermelha from '../componentes/CamisetaVermelha';
import ProdutoCatalogo from '../componentes/ProdutoCatalogo';

function Home() {

    return (
        <>
            <Navbar/>
            <div className='catalogo'>
                <a href="/catalogo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <CarroNoCeu />
            <div className='lancamentos text-center mt-5 text-black'>
                <p>Lançamentos</p>
            </div>
            <div className='imgs-lancamentos p-8 flex flex-row justify-center flex-wrap gap-40'>
                <ProdutoLanc/>
                <CamisetaJapan/>
                <CamisetaVermelha/>
                <CamisetaDrift/>
                <ProdutoCatalogo/>
            </div>
        </>
    );

}
export default Home;
