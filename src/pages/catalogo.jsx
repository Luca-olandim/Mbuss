import React from 'react';
import '../App.css';
import Navbar from '../componentes/navbar';
import ProdutoCatalogo from '../componentes/ProdutoCatalogo';
import CamisetaDrift from '../componentes/CamisetaDrift';
import ProdutoLanc from '../componentes/produtoLanc';
import CamisetaVermelha from '../componentes/CamisetaVermelha';
import CamisetaJapan from '../componentes/CamisetaJapan';

function Catalogo() {
  return (
    <>
      <Navbar />
      <div className='catalogo'>
        <a style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
          Catálogo
        </a>
      </div>
      <div className='imgs-lancamentos p-8 mt-10 flex flex-row justify-center flex-wrap gap-40'>
        <ProdutoLanc/>
        <CamisetaJapan/>
        <CamisetaVermelha/>
        <CamisetaDrift/>
        <ProdutoCatalogo/>
      </div>
    </>
  );
}

export default Catalogo;