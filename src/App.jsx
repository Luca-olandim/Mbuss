import React from "react"
import Cadastro from "./pages/cadastro"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home";
import Produto from "./pages/produto";
import Carrinho from "./pages/carrinho";
import Favoritos from "./pages/favoritos";
import Conta from "./pages/conta";
import Catalogo from "./pages/catalogo";
import Pagamento from "./pages/pagamento";
import Confirmacaopag from "./pages/confirmacaopag";
import Produto3d from "./pages/produto3d";
import CamisetaJapan3D from "./pages/CamisetaJapan3D";
import ProdutoCamisetaJapan from "./pages/produtoCamisetaJapan";
import ProdutosAdmin from "./pages/ProdutosAdmin.jsx";
import ProdutoVermelha3D from "./pages/CamisetaVermelha3D.jsx"
import ProdutoVermelha from "./pages/produtoVermelha";
import ProdutoCamisetaDrift from "./pages/produtoDrift.jsx";
import ProdutoDrift3D from "./pages/CamisetaDrift3D.jsx";
import VisualizarProduto from "./pages/visualizarProduto.jsx"

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/produto" element={<Produto/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
          <Route path="/favoritos" element={<Favoritos/>}/>
          <Route path="/conta" element={<Conta/>}/>
          <Route path="/catalogo" element={<Catalogo/>}/>
          <Route path="/pagamento" element={<Pagamento/>}/>
          <Route path="/confirmacaopag" element={<Confirmacaopag/>}/>
          <Route path="/produto3d" element={<Produto3d/>}/>
          <Route path="/produtosadmin" element={<ProdutosAdmin/>} />
          <Route path="/camisetajapan3d" element={<CamisetaJapan3D/>} />
          <Route path="/camisetavermelha3d" element={<ProdutoVermelha3D/>} />
          <Route path="/camisetadrift3d" element={<ProdutoDrift3D/>} />
          <Route path="/produtocamisetajapan" element={<ProdutoCamisetaJapan/>} />
          <Route path="/produtocamisetavermelha" element={<ProdutoVermelha/>} />
          <Route path="/produtocamisetadrift" element={<ProdutoCamisetaDrift/>} />
          <Route path="/vizualizacaoproduto" element={<VisualizarProduto/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;