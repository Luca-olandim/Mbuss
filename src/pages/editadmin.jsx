import '../App.css'
import Navbar from '../componentes/navbar.jsx';
import ProdutoEdit from '../componentes/produtoEdit.jsx';

function Editadmin(){

    return(
        <>  
            <Navbar/>
            <div className='catalogo'>
                <a style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>Catálogo</a>
            </div>
            <div className='botoes'>
                <button className='filtrar-style border-none rounded-[20px] bg-black mt-14 w-48 h-9 text-white' type='submit'>Filtrar</button>
                <div className='botoes2'>
                <a id='alinkbutton' href=""><button className='filtrar-style border-none rounded-[20px] bg-black mt-14 ml-[13%] w-48 h-9 text-white' type='submit'>Adicionar</button></a>
                <a id='alinkbutton' href="/removeadmin"><button className='filtrar-style border-none rounded-[20px] bg-black mt-14 ml-[13%] w-48 h-9 text-white' type='submit'>Remover</button></a>
                <a id='alinkbutton' href="/editadmin"><button className='filtrar-style border-none rounded-[20px] bg-black mt-14 ml-[13%] w-48 h-9 text-white' type='submit'>Editar</button></a>
                </div>
            </div>
            <div className='imgs-lancamentos p-8 mt-10 flex flex-row justify-center flex-wrap gap-52'>
                <ProdutoEdit/>
                <ProdutoEdit/>
                <ProdutoEdit/>
                <ProdutoEdit/>
                <ProdutoEdit/>
                <ProdutoEdit/>
            </div>
        </>
    );
}
export default Editadmin;