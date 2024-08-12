import React from "react"
import Cadastro from "./pages/cadastro"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/login";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
