import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from  '../images/logo.jpg'
import Navbar from '../componentes/navbar';
import SizeDropdown from '../componentes/dropdown';


function Produto(){
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count- 1);
    };
    

  return (
    <>
    <Navbar/>
    <img
          className="d-block w-30 h-[450px] ml-48 mt-12 bg-gray-300"
          src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
          alt="Second slide"
        />
    <div className='descricao-produto'>
        <p>CAMISETA BASIC SUPER OVERSIZED WHITE. Camiseta manga curta modelagem oversized,
        confeccionada em tecido de algodão. Possui etiqueta na altura do peito.</p>
        <p id='preco'>R$ 150,00</p>
					
	
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>

        <button></button>
   
    <SizeDropdown/>
    </>
    );
    }
export default Produto;