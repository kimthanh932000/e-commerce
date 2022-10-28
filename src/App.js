import './App.css';
import { useEffect, useState } from 'react';
// import {Products} from './components/products/Products';
import Layout from './layout/index';
import {commerce} from './lib/commerce';
import { Products, Cart } from './components';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    // console.log("🚀 ~ file: App.js ~ line 19 ~ fetchCart ~ cart", cart)
    setCart(cart)
  }

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }
  // console.log("🚀 ~ file: App.js ~ line 20 ~ fetchCart ~ cart", cart)

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <div className="App">
      <Layout totalItems={cart?.total_items}>
        {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
        <Cart cart={cart}/>
      </Layout>
    </div>
  );
}

export default App;
