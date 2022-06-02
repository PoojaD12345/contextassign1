import React, { useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import {TheamContext} from '../context/TheamContext'
import WishList from './WishList'

const Navbar = () => {
    const {isAuthorized,login,logout}=useContext(AuthContext)
    const {buy}=useContext(CartContext);
    const {isLight,toggleTheme}=useContext(TheamContext)
  return (
    <div>Navbar
        <button onClick={()=>{
            if(isAuthorized)logout();
            else login("R","Z");
        }}>
            {isAuthorized ? "Logout":"Login"}
        </button>
        <button onClick={buy}>Buy</button>
        <button onClick={toggleTheme}>{`Make ${isLight ? "dark":"light"}`}</button>
        {isAuthorized && <WishList />}
    </div>
  )
}

export default Navbar