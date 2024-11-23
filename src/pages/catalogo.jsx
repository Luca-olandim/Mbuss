import React from 'react';
import '../App.css';
import Navbar from '../componentes/navbar';
import ProdutoLanc from '../componentes/produtoLanc';
import CamisetaJapan from '../componentes/CamisetaJapan' ;

function Catalogo() {
  return (
    <>
      <Navbar />
      <div className='catalogo'>
        <a style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
          Catálogo
        </a>
      </div>
      <div>
      </div>
      <div className='imgs-lancamentos p-8 mt-10 flex flex-row justify-center flex-wrap gap-52'>
        <ProdutoLanc />
        <CamisetaJapan/>
        <ProdutoLanc />
        <CamisetaJapan/>
        <ProdutoLanc />
        <CamisetaJapan/>
        <ProdutoLanc />
        <CamisetaJapan/>
      </div>
    </>
  );
}

export default Catalogo;
