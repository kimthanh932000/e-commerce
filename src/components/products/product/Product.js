import React from 'react'
import './style.scss'
import { MdShoppingCart } from "react-icons/md";

const Product = ({ product }) => {
  return (
    <div className='p-prod u-box-shadow u-d-flex u-flex-column u-border-radius-sm'>
      <div className="img-container">
        <img className="p-prod__img" src={product.image} />
      </div>
      {/* <img className="p-prod__img" src={product.image} /> */}
      <div className="content">
        <div className='u-d-flex u-space-between'>
          <h2 className="p-prod__name">{product.name}</h2>
          <h3 className="p-prod__price">{product.price}</h3>
        </div>
        <h5 className="p-prod__description">{product.description}</h5>
      </div>
      <div className="action u-d-flex u-flex-end">
        <button className="p-prod__btn-cart">
          <MdShoppingCart />
        </button>
      </div>
    </div>
  )
}

export default Product