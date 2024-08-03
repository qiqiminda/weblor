import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductGrid from './pages/ProductGrid';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import TodoList from './pages/TodoList';

const App = () => {
  return (
    <Router>
      <div className='flex w-screen h-screen overflow-hidden'>
        <Sidebar />

        <div className='flex-1 h-full overflow-y-auto'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/list" element={<ProductGrid />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
