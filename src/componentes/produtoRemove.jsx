import React, { useState, useEffect } from 'react';
import '../App.css';
import deleteicon from '../images/delete.png';
import ModalRemove from '../componentes/modalremove'; 

function ProdutoRemove() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRemoveClick = () => {
    console.log('Ícone de remover clicado');
    setIsModalVisible(true); 
  };

  const closeModal = () => {
    console.log('Modal fechado');
    setIsModalVisible(false);
  };

  useEffect(() => {
    console.log('Modal visível:', isModalVisible);
  }, [isModalVisible]);

  return (
    <>
      <div className='w-[22%] relative'>
        <img
          className="d-block w-full h-[406px] bg-gray-300"
          src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
          alt="Produto"
        />

        <div
          className="remove-icon-container absolute top-2 right-2 cursor-pointer"
          onClick={handleRemoveClick}
        >
          <img
            src={deleteicon}
            alt="Ícone de remoção"
            className="remove-icon"
          />
        </div>

        <div className='descricao-p w-full'>
          <div className='flex justify-between items-center p-2'>
            <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
            <p className='text-end mr-1'>R$150,00</p>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <ModalRemove isVisible={isModalVisible} onClose={closeModal} />
      )}
    </>
  );
}

export default ProdutoRemove;
