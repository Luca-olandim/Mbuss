import React, { useState} from 'react';
import '../css/produto3d.css'
import Navbar from '../componentes/navbar';
import TShirt360Viewer2 from '../componentes/TShirt360Viewer2';

function CamisetaVermelha3D(){
    return(
        <>  
            <Navbar/>
            <div className='catalogo'>
                <a href="/catalogo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <div className='imagem3d'>
            <TShirt360Viewer2
                imageCount={236}
                imagePath="/src/images/camiseta4/"
                width={600}
                height={600}
            />
            </div>
            <div className='voltar-botao josefin-sans'>
               <a href="/produtocamisetavermelha"><button>Voltar</button></a>
            </div>
            <br />
        </>
    )
}
export default CamisetaVermelha3D;