import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from '../componentes/navbar';
import { useNavigate } from 'react-router-dom';

function Conta() {
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const correto = localStorage.getItem('dados usuario');
        
        // Check if the data exists and is not null
        if (correto) {
            try {
                // Parse the stored data safely
                const storedData = JSON.parse(correto);

                // Ensure the data is an array and contains at least one item
                if (Array.isArray(storedData) && storedData.length > 0) {
                    setUserInfo(storedData[0]); // Set user info to the first element of the array
                }
            } catch (e) {
                console.error("Error parsing stored user data:", e);
            }
        }
    }, []);

    const sairConta = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <>
            <Navbar />
            <div className='catalogo'>
                <a style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Conta</a>
            </div>
            <div className='text-center m-auto mt-5'>
                <h1 className='info-conta m-auto bg-black text-white w-1/2 h-12 flex justify-center items-center'>Minhas Informações</h1>
                <div className='desc-conta m-auto bg-customGray w-1/2 h-28 text-left'>
                    <p className='ml-2'>Nome: {userInfo.nome}</p>
                    <p className='ml-2'>CPF: {userInfo.cpf}</p>
                    <p className='ml-2'>Celular: {userInfo.telefone}</p>
                    <p className='ml-2'>Email: {userInfo.email}</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <button className='text-white bg-red-700 w-20 h-10 rounded-[20px] josefin-sans font-bold' onClick={sairConta}>Sair</button>
            </div>
        </>
    );
}

export default Conta;
