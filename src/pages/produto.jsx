import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/produto.css'
import logo from  '../images/logo.jpg'
import Navbar from '../componentes/navbar';
import SizeDropdown from '../componentes/dropdown';
import CamisetaJapan from '../images/CamisetaJapan.png'
import CamisetaGrito from '../images/CamisetaGrito.png'

function Produto(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
      setCount(Math.max(count - 1, 0));
    };
    

  return (
    <>
    <Navbar/>
    <div className='josefin-sans'>
    <div className='catalogo'>
                <a href="/catalogo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
    <div className='produto-container'>
      <img
        className="img-produto"
        src= {CamisetaGrito}
      />
      <div className='descricao-produto' >
      <a id='link3d' href="/produto3d"><button id='button3d'>3D</button></a>
        <p>SCREAM MBUSS Black Tee é uma camiseta confeccionada com gola em ribana de 3cm, tem mangas e modelagem mais ampla com foco em um caimento perfeito ao corpo.
        O material escolhido é um algodão de gramatura elevada que proporciona conforto e veste de forma fluída.</p>
        <p id='preco'>R$ 189,90</p> 
        <div className='modificadores'>     
          <select>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
          </select>
          <div>
          </div>
        </div> 
        <button className="comprar">Comprar</button>
      </div>   
    </div>
    </div>
    </>
    );
    }
export default Produto;