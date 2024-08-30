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

        </Routes>
      </Router>
    </>
  )
}

export default App;
