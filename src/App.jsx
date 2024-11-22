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
import Catalogoadmin from "./pages/catalogoadmin";
import Removeadmin from "./pages/removeadmin";
import Editadmin from "./pages/editadmin";
import AddProductPage from "./pages/AddProductPage";
import CamisetaJapan3D from "./pages/CamisetaJapan3D";
import ProdutoCamisetaJapan from "./pages/produtoCamisetaJapan";

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
          <Route path="/catalogoadmin" element={<Catalogoadmin/>}/>
          <Route path="/removeadmin" element={<Removeadmin/>}/>
          <Route path="/editadmin" element={<Editadmin/>}/>
          <Route path="/add-product" element={<AddProductPage/>} />
          <Route path="/camisetajapan3d" element={<CamisetaJapan3D/>} />
          <Route path="/produtocamisetajapan" element={<ProdutoCamisetaJapan/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;