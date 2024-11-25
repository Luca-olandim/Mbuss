import React, { useState} from 'react';
import '../css/produto3d.css'
import Navbar from '../componentes/navbar';
import TShirt360Viewer3 from '../componentes/TShirt360Viewer3';

function CamisetaVermelha3D(){
    return(
        <>  
            <Navbar/>
            <div className='catalogo'>
                <a href="/catalogo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <div className='imagem3d'>
            <TShirt360Viewer3
                imageCount={236}
                imagePath="/src/images/camiseta3/"
                width={600}
                height={600}
            />
            </div>
            <div className='voltar-botao josefin-sans'>
               <a href="/produtocamisetadrift"><button>Voltar</button></a>
            </div>
            <br />
        </>
    )
}
export default CamisetaVermelha3D;