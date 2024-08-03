import React from 'react';
import { Link } from 'react-router-dom';
import mockData from '../mockData';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {mockData.map(product => (
        <div key={product.id} className="border p-2  rounded-md" >
          <Link to={`/product/${product.id}`}>
            <img src={product.links} alt={product.name} className="w-full h-auto " />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
