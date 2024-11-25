import React, { useState} from 'react';
import '../css/produto3d.css'
import Navbar from '../componentes/navbar';
import TShirt360Viewer from '../componentes/TShirt360Viewer';

function CamisetaJapan3D(){
    return(
        <>  
            <Navbar/>
            <div className='catalogo'>
                <a href="/catalogo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <div className='imagem3d'>
            <TShirt360Viewer
                imageCount={236}
                imagePath="/src/images/camiseta2/"
                width={600}
                height={600}
                fileBaseName='black0001.png'
            />
            </div>
            <div className='voltar-botao josefin-sans'>
               <a href="/produtocamisetajapan"><button>Voltar</button></a>
            </div>
            <br />
        </>
    )
}
export default CamisetaJapan3D