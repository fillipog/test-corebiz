import React from 'react'
import './index.css'
import Logo from '../../assets/images/logo-corebiz.png'
import Search from '../../assets/images/search.png'
import User from '../../assets/images/user-1.png'
import Cart from '../../assets/images/cart.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
      <div className="header__wrapper">
         <div className="logo__wrapper">
           <img className="logo" src={Logo} alt="logo" />
         </div>
         <div className="search">
          <input placeholder = "O que você está procurando?"/>
          <img src={Search} alt="search" />
         </div>
         <div className="user__wrapper">
          <img className="user margin" src={User} alt="user" />
          <h4 className="margin">Minha Conta</h4>
          <img className="cart margin" src={Cart} alt="cart" />
         </div>
      </div>
  );
}