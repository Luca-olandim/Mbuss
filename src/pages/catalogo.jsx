import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Navbar from '../componentes/navbar';
import ProdutoLanc from '../componentes/produtoLanc';

function Catalogo(){

    return(
        <>  
            <Navbar/>
            <div className='catalogo'>
                <a style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <div>
                <button className='filtrar-style border-none rounded-[20px] bg-black mt-14 ml-[13%] w-48 h-9 text-white' type='submit'>Filtrar</button>
            </div>
            <div className='imgs-lancamentos p-8 mt-10 flex flex-row justify-center flex-wrap gap-52'>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
                <ProdutoLanc/>
            </div>
        </>
    )
}
export default Catalogo