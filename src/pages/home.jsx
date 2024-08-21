import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from  '../images/logo.jpg';
import Navbar from '../componentes/navbar';
import CarroNoCeu from '../componentes/carousel';

function Home(){

return(
    <>
    <Navbar/>
    <CarroNoCeu/>
    </>
    );

} 
export default Home;
