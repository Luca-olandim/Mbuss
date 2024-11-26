import '../App.css';
import edit from '../images/edit.png'

function produtoedit(){
  return (
    <>
      <div className='w-[22%] relative'>
        <img
          className="d-block w-full h-[406px] bg-gray-300"
          src="https://s2-quem.glbimg.com/tO1_2p_vASEjMAOtd-DippLCN64=/0x0:1269x1269/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/1/y/Mz8UwoTiejCg9BJuhWmg/318770676-1864787700531022-3706966706225335508-n-1-.jpg"
          alt="Produto"
        />
        <div
          className="edit-icon-container absolute top-2 right-2 cursor-pointer"
        >
          <img
            src={edit}
            alt="Ícone de edicão"
            className="edit-icon"
          />
        </div>

        <div className='descricao-p w-full'>
          <div className='flex justify-between items-center p-2'>
            <p className='ml-2'>CAMISETA BASIC SUPER OVERSIZED WHITE </p>
            <p className='text-end mr-1'>R$150,00</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default produtoedit;