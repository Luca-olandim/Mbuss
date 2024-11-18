import React, { useState} from 'react';
import '../App.css'
import Navbar from '../componentes/navbar';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Conta(){

    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('dados usuario'));
        if (storedData && Array.isArray(storedData) && storedData.length > 0) {
            setUserInfo(storedData[0]);
        }
    }, []);

    const sairConta = () =>{
        localStorage.clear()
        navigate('/login')
    }
    return(
        <>
            <Navbar/>
            <div className='catalogo'>
                <a style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Conta</a>
            </div>
            <div className='text-center m-auto  mt-5'>
                <h1 className='info-conta m-auto  bg-black text-white w-1/2 h-12 flex justify-center items-center'>Minhas Informações</h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left'>
                    <p className='ml-2'>Nome: {userInfo.nome}</p>
                    <p className='ml-2'>CPF: {userInfo.cpf}</p>
                    <p className='ml-2'>Celular: {userInfo.telefone}</p>
                    <p className='ml-2'>Email: {userInfo.email}</p>
                </div>
            </div>
            <div className='text-center m-auto mt-5'>
                <h1 className='info-conta m-auto bg-black text-white w-1/2 h-12 flex justify-center items-center'>Meus Pedidos</h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left'>
                    <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE</p>
                    <p className='ml-2'>R$ 150,00</p>
                    <p className='ml-2'>-Aguardando Pagamento</p>
                </div>
            </div>
            <div className='text-center m-auto mt-5'>
                <h1 className='info-conta m-auto bg-black text-white w-1/2 h-12 flex justify-center items-center'>Métodos de Pagamento</h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left '>
                    <p className='ml-2'>Cartão de Crédito: 8765 7645 4234 8123</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <button className='text-white bg-red-700 w-20 h-10 rounded-[20px] josefin-sans font-bold' onClick={sairConta}>Sair</button>
            </div>
        </>
    )
}
export default Conta