import React from 'react';
import './style.scss';
import {ICartItem} from "../../../interface";

type Props = {
    item: ICartItem,
    onUpdateCartQty: (productId: number, quantity: number) => void,
    onRemoveFromCart: (productId: number) => void
}

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }: Props) => {
    return (
        <div className="p-item">
            <div className="img-container">
                <img
                    className="p-item__img"
                    src={item.image.url}
                    alt={item.name}
                />
            </div>
            <div className="content">
                <div className="u-d-flex u-space-between u-flex-wrap">
                    <h3 className="p-item__name u-overflow-ellipsis">
                        {item.name}
                    </h3>
                    <h4 className="p-item__price">
                        {item.price.formatted_with_symbol}
                    </h4>
                </div>
            </div>
            <div className="action u-d-flex u-space-between">
                <button className='c-btn p-item__btn' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                <span className='p-item__quantity'>{item.quantity}</span>
                <button className='c-btn p-item__btn' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                <button className="c-btn c-btn-danger u-text-white" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
