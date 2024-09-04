import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/produto3d.css'
import Navbar from '../componentes/navbar';
import Camiseta from '../images/camiseta.png'

function Produto3d(){

    return(
        <>  
            <Navbar/>
            <div className='catalogo'>
                <a style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <div className='imagem3d'>
            <img src={Camiseta} alt="" />
            </div>
            <div className='voltar-botao'>
               <a href="/produto"><button>Voltar</button></a>
            </div>
            <br />
        </>
    )
}
export default Produto3d