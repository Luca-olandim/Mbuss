import React from "react";
import '../App.css';

const Stepper = () => {
  return (
    <div className="stepper">
      <a href="/carrinho"><div className="step1">1 - Carrinho</div></a>
      <a href="/login"><div className="step2">2 - Identificação</div></a>
      <a href="/pagamento"><div className="step3">3 - Pagamento</div></a>
    </div>
  );
};

export default Stepper;
