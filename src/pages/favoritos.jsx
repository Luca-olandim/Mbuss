import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Navbar from '../componentes/navbar';

function Favoritos(){

    return(
        <>
            <Navbar/>
            <div className='catalogo'>
                <a href="#" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Favoritos</a>
            </div>
        </>
    )
}
export default Favoritos