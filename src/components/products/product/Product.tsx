import React from 'react'
import './style.scss'
import { MdShoppingCart } from "react-icons/md";
import {IProduct} from '../../../interface/index';

type Props = {
    product: IProduct,
    onAddToCart: (productId: number, quantity: number) => void
}

const Product = ({ product, onAddToCart }: Props) => {
  return (
    <div className='p-prod u-box-shadow u-d-flex u-flex-column u-border-radius-sm'>
      <div className="img-container">
        <img className="p-prod__img" src={product.image.url} alt={product.name}/>
      </div>
      <div className="content">
        <div className='u-d-flex u-space-between u-flex-wrap'>
          <h3 className="p-prod__name u-overflow-ellipsis">{product.name}</h3>
          <h4 className="p-prod__price">{product.price.formatted_with_symbol}</h4>
        </div>
        <h5 dangerouslySetInnerHTML={{__html: product.description}} className="p-prod__description"></h5>
      </div>
      <div className="action u-d-flex u-flex-end">
        <button className="p-prod__btn-cart" onClick={() => onAddToCart(product.id, 1)}>
          <MdShoppingCart />
        </button>
      </div>
    </div>
  )
}

export default Product