import React from 'react';
import "./Header.css";

import { Link } from "react-router-dom";
//import NavBar from '../NavBar/NavBar';
import CardHorizontal from '../CardHorizontal/CardHorizontal';

import Button from '@mui/material/Button';
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img id='image-movie' src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000002732/desc/c855db8b24e1b8d6cabeee3ea2cb36422bc263d8b15223be9425c239450686d9" alt="" />
      </Link>
      
      <Link className='NombreLink' to="/">
        <div className='NombreLink' id='nombreid' >

          <h1 >Naruto</h1>
          <p ><em>- Inicio -</em></p>
        </div>
        </Link>
        
      <Link to="/fav">
        <Button  sx={{margin:2, width:150}} variant="contained">Like</Button>
      </Link>
      {/* <CardHorizontal hola={"Titulazo"}/>  */}
      {/* <NavBar /> */}
    </header>
  )
}

export default Header