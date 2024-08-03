// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-36 h-screen bg-gray-800 text-white flex flex-col">
      <Link to="/" className="p-4 hover:bg-gray-700">Login</Link>
      <Link to="/todo" className="p-4 hover:bg-gray-700">To do</Link>
      <Link to="/list" className="p-4 hover:bg-gray-700">Menu</Link>
    </div>
  );
}

export default Sidebar;
