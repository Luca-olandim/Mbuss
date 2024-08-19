import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from  '../images/logo.jpg'
import Navbar from '../componentes/navbar';


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
    
    <div className='descricao-produto'>
        <p>CAMISETA BASIC SUPER OVERSIZED WHITE. Camiseta manga curta modelagem oversized,
        confeccionada em tecido de algodão. Possui etiqueta na altura do peito.</p>
        <p id='preco'>R$ 150,00</p>
        <li class="nav-item dropdown ml-md-auto">
            <div class="paste-button">
                <button class="button">Tamanho &nbsp; ▼</button>
                    <div class="dropdown-content">
                        <p>P</p>
                        <p>M</p>
                        <p>G</p>
                    </div>
            </div>   
        </li>
        <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>

        <button></button>
    </div>
    
    </>
    );
  }
export default Produto;