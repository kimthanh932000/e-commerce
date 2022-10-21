import './App.css';
import { useEffect, useState } from 'react';
import Products from './components/products/Products';
import Layout from './layout/index';
import {commerce} from './lib/commerce';

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    console.log(data)
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="App">
      <Layout>
        <Products products={products}/>
      </Layout>
    </div>
  );
}

export default App;
