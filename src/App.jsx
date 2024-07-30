import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './pages/ProductGrid';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/list" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
