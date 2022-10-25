import React from 'react'
import './style.scss'
import logo from '../../assets/images/logo.png'
import { MdShoppingCart } from "react-icons/md";

const Header = ({totalItems}) => {
  return (
    <header className='l-header u-d-flex u-space-between'>
      <div className="p-logo">
        <a href="#" className="p-logo__link u-d-flex u-align-center">
          <img src={logo} alt="logo" className='p-logo__img'/>
          <span className='u-fw-bold'>Commerce.js</span>
        </a>
      </div>
      <div className="p-cart u-d-flex u-align-center">
        <a href="#" className='p-cart__link'>
          <span className="p-cart__count">{totalItems}</span>
          <MdShoppingCart className='p-cart__icon'/>
        </a>
      </div>
    </header>
  )
}

export default Header