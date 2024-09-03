import Logo from './images/buss.png'
import Check from './images/verify4K.png'
import './App.css'

function Confirmacaopag() {

  return (
    <>
    <div className='main'>

      <div className='logo'>
        <img src={Logo} className='w-[250px] h-auto' />
      </div>

      <div className='mensagem'>
        <img src={Check} className='check' />
        <h1 className='text-center mt-4'>Pagamento Concluído! Obrigado pela Compra.</h1>
      </div>

    </div>
    </>
  )
}

export default Confirmacaopag