import React, { useState} from 'react';
import '../css/produto.css'
import Navbar from '../componentes/navbar';
import CamisetaJapan from '../images/CamisetaJapan.png'

function ProdutoCamisetaJapan(){
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
        src= {CamisetaJapan}
      />
      <div className='descricao-produto' >
      <a id='link3d' href="/camisetajapan3d"><button id='button3d'>3D</button></a>
        <p>URBAN NIGHTLIFE Black Tee é uma camiseta confeccionada com gola em ribana de 3cm, tem mangas e modelagem mais ampla com foco em um caimento perfeito ao corpo.
O material escolhido é um algodão de gramatura elevada que proporciona conforto e veste de forma fluída.</p>
        <p id='preco'>R$ 189,90</p> 
        <div className='modificadores'>     
          <select>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
          </select>
          <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </div>
        </div> 
        <button className="comprar">Comprar</button>
      </div>   
    </div>
    </div>
    </>
    );
    }
export default ProdutoCamisetaJapan;