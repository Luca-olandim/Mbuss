import React, { useState } from 'react';
import '../App.css'
import ProdutoForm from '../componentes/ProdutoForm';
import ProdutoList from '../componentes/ProdutoList';

function Home() {

    return (
        <>
            <ProdutoForm/>
            <ProdutoList/>
        </>
    );

}
export default Home;