import React from 'react';
import './style.scss';
import logo from '../../assets/images/logo.png';
import { MdShoppingCart } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ totalItems }) => {
    const location = useLocation();

    return (
        <header className="l-header u-d-flex u-space-between">
            <div className="p-logo">
                <Link to="/" className="p-logo__link u-d-flex u-align-center">
                    <img src={logo} alt="logo" className="p-logo__img" />
                    <span className="u-fw-bold">Commerce.js</span>
                </Link>
            </div>
            <div className="p-cart u-d-flex u-align-center">
                {location.pathname === '/' && (
                    <Link to="/cart" className="p-cart__link">
                        <span className="p-cart__count">{totalItems}</span>
                        <MdShoppingCart className="p-cart__icon" />
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
