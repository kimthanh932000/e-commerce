import React from 'react'
import './style.scss'
import Product from './product/Product'

const Products = ({products}) => {
  return (
    <div className='products-container u-d-flex u-flex-wrap u-justify-center'>
      {
        products.map(product => <Product key={product.id} product={product} />)
      }
    </div>
  )
}

export default Products