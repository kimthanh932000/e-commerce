import React from 'react';
import './style.scss';
import { CartItem } from '../../components';
import {Link} from 'react-router-dom';

const Cart = ({ cart }) => {

    const EmptyCart = () => (
        <h3>You have no items in your shopping cart, <Link to='/' className='text-primary'>start adding some!</Link></h3>
    );

    const FilledCart = () => (
        <div className='p-cart'>
            <div className='p-cart-wrapper u-d-flex u-flex-wrap'>
                {cart.line_items.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
            </div>
            <div className="p-cart__action u-d-flex u-space-between u-align-center">
                <h3 className="p-cart__total">
                    Subtotal: <strong>{cart.subtotal.formatted_with_symbol}</strong>
                </h3>
                <div>
                    <button className="p-cart__action-empty c-btn c-btn-danger u-text-white u-margin-right-md">
                        Empty cart
                    </button>
                    <button className="p-cart__action-checkout c-btn c-btn-primary u-text-white">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );

    if (!cart.line_items) {
        return 'Loading...';
    }

    return (
        <div className="container">
            <h1>Your Shopping Cart</h1>
            {cart?.line_items?.length ? <FilledCart /> : <EmptyCart />}
        </div>
    );
};

export default Cart;
