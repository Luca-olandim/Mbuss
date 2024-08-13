import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import logo from  '../images/logo.jpg';

function Navbar(){

return(
    <>
    <div className='navbar'>
        <form className="form">
            <input className="input-search" placeholder="Pesquisar para..." required="" type="text"/>
        </form>
        <div className='img-logo-home'>
            <a href=''><img src={logo} style={{ width: '250px', height: 'auto' }}></img></a>
        </div>
        <div className='input-icones'>
            <div className='favoritos'>
            <svg xmlns="http://www.w3.org/2000/svg" id="heart" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917Z"/></svg>
            </div>
            <div className='carrinho'>
            <svg xmlns="http://www.w3.org/2000/svg" id="shopbag" viewBox="0 0 24 24" width="30" height="30"><path d="M24,9a3,3,0,0,0-3-3H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5ZM8,6a4,4,0,0,1,8,0Z"/></svg>
            </div>
            <div className='conta'>
            <svg xmlns="http://www.w3.org/2000/svg" id="user" data-name="Layer 1" viewBox="0 0 24 24" width="30" height="30"><path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/><circle cx="12" cy="6" r="6"/></svg>
            </div>
        </div>
    </div>
    </>
    );
} 
export default Navbar;
