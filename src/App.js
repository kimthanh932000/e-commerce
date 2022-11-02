import './App.css';
import { useEffect, useState } from 'react';
import Layout from './layout/index';
import { commerce } from './lib/commerce';
import { Products, Cart } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-css-only/css/bootstrap.min.css';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    };

    const handleAddToCart = async (productId, quantity) => {
        const cart = await commerce.cart.add(productId, quantity);
        setCart(cart);
    };

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div className="App">
                <Layout totalItems={cart?.total_items}>
                  <Routes>
                    <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>
                    <Route exact path="/cart" element={<Cart cart={cart} />}/>
                  </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
