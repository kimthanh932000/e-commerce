import React from 'react'
import './style.scss'
import Product from './product/Product'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes.',
    price: '$5',
    image: 'https://salt.tikicdn.com/cache/750x750/ts/product/d0/b7/5a/b8b83dd803abb79eae7b78e7083d72d4.jpg.webp'
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook.',
    price: '$10',
    image: 'https://salt.tikicdn.com/cache/750x750/media/catalog/producttmp/5d/50/5e/1d977cb23133c625f0baf7f4326cf523.jpg.webp'
  }
]

const Products = () => {
  return (
    <div className='products-container u-d-flex'>
      {
        products.map(product => <Product key={product.id} product={product} />)
      }
    </div>
  )
}

export default Products