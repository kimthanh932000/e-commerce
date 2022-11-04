import './App.css';
import { useEffect, useState } from 'react';
import Layout from './layout';
import { commerce } from './lib/commerce';
import { Products, Cart } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import {ICart, IProduct} from './interface/index'

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<ICart>({line_items: [], subtotal: {formatted_with_symbol: ""}, total_items: 0});

    const fetchProducts = async (): Promise<void> => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async (): Promise<void> => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    };

    const handleAddToCart = async (productId: number, quantity: number): Promise<void> => {
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
                    <Route path="/" element={<Products products={products} onAddToCart={handleAddToCart}/>}/>
                    <Route path="/cart" element={<Cart cart={cart} />}/>
                  </Routes>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
