import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';

const App = () => {
  const cartCount = useSelector(state => state.cart.length);

  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#1976d2', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>🛍 MyShop</Link>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>
          Cart ({cartCount})
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
