import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockData from '../mockData';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = mockData.find(p => p.id === parseInt(id));

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-4">{product.name}</h1>
      <img src={product.links} alt={product.name} className="w-80 h-80 object-contain mb-4" />
      <p className="text-2xl text-center mb-4">Giá: {product.price}đ</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-blue-500 text-white text-lg px-6 py-3 rounded"
      >
        Trở lại
      </button>
    </div>
  );
};

export default ProductDetail;
