import React,{useContext} from 'react'
import Cart from './Cart'
import {AuthContext} from '../context/AuthContext'

const Product = () => {
    const {isAuthorized}=useContext(AuthContext)
  return (
    <div>Products:{isAuthorized?"LoggedIn":"LoggedOut"}
        <Cart/>
    </div>
  )
}

export default Product