import React from 'react';
import "./Header.css";

//import NavBar from '../NavBar/NavBar';
import CardHorizontal from '../CardHorizontal/CardHorizontal';

const Header = () => {
  return (
    <header>
      <img id='image-movie' src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/ncom/software/switch/70010000002732/desc/c855db8b24e1b8d6cabeee3ea2cb36422bc263d8b15223be9425c239450686d9" alt="" />
      <div id='nombreid'>

        <h1>Naruto</h1>
        <p>- Información -</p>
      </div>
       {/* <CardHorizontal hola={"Titulazo"}/>  */}
      {/* <NavBar /> */}
    </header>
  )
}

export default Header