import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from  '../images/logo.jpg'

  
function Recuperacao() {
    const [email, setUseremail] = useState('');
  

 
  
  return (
    <>
    <div className='img-logo pt-2'>
      <a href='/'><img src={logo} className='w-[250px] h-auto m-auto'></img></a>
    </div>
    <div className='login-container'>
    <div className='tCadastro'>
        <h1 className='text-2xl mb-2'>Esqueceu sua Senha?</h1>
      </div><br />
      <form>
        <label>
          <p>Endereço de Email</p>
          <input
          placeholder='Insira seu email'
            type="text"
            value={email}
            onChange={(e) => setUseremail(e.target.value)}
            className='input-form rounded-[20px] mb-0'
          />
        </label>
        <br />
        <button className="botao-login" type="submit" >
          Enviar link de recuperação
        </button>
      </form>
    </div>
    </>
  );
}

export default Recuperacao