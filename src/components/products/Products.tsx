import React from 'react'
import './style.scss'
import {Product} from '../../components'
import {IProduct} from '../../interface/index'

type Props = {
  products: IProduct[],
  onAddToCart: (productId: number, quantity: number) => void
}

const Products = ({products, onAddToCart}: Props) => {
  return (
    <div className='products-container u-d-flex u-flex-wrap u-justify-center'>
      {
        products.map(product => <Product key={product.id} product={product} onAddToCart={onAddToCart}/>)
      }
    </div>
  )
}

export default Products