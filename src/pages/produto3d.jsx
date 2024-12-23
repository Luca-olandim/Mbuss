import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/produto3d.css'
import Navbar from '../componentes/navbar';
import TShirt360Viewer from '../componentes/TShirt360Viewer';

function Produto3d(){
    return(
        <>  
            <Navbar/>
            <div className='catalogo'>
                <a href="/catalogo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <div className='imagem3d'>
            <TShirt360Viewer
                imageCount={236}
                imagePath="/src/images/camiseta1/"
                width={600}
                height={600}
            />
            </div>
            <div className='voltar-botao josefin-sans'>
               <a href="/produto"><button>Voltar</button></a>
            </div>
            <br />
        </>
    )
}
export default Produto3d