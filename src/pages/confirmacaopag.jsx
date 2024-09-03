import logo from '../images/logo.jpg'
import check from '../images/verificado.png'
import '../css/confirmacaopag.css';

function Confirmacaopag() {

  return (
    <>
    <div className='main'>
      <div className='logo'>
        <a href='/'><img src={logo}  className='w-[250px] h-auto'></img></a>
      </div>
      <div className='mensagem'>
        <img src={check} className='check' />
        <h1 className='text-center mt-4'>Pagamento Concluído! Obrigado pela Compra.</h1>
      </div>
    </div>
    </>
  )
}

export default Confirmacaopag