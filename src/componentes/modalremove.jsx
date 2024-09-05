import React from 'react';
import '../css/modalremove.css';

function ModalRemove({ isVisible, onClose }) {
  if (!isVisible) {
    return null; // Não renderiza o modal se não estiver visível
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Deseja excluir o produto selecionado?</p>
        <img
          src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
          alt="Produto a ser removido"
        />
        <p>CAMISETA BASIC SUPER OVERSIZED WHITE</p>
        <p>R$ 150,00</p>
        <div className="modal-buttons">
          <button onClick={onClose}>Remover</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalRemove;
