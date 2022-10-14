import './App.css';
import Products from './components/products/Products';
import Layout from './layout/index';

function App() {
  return (
    <div className="App">
      <Layout>
        <Products />
      </Layout>
    </div>
  );
}

export default App;
