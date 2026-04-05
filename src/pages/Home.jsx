import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="homePage flex flex-col items-center justify-center min-h-[80vh] text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-lg text-gray-600 mb-8">
                Discover the best products at unbeatable prices.
            </p>
            <button 
                className="explore-btn bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer" 
                onClick={() => {
                    navigate('/products');
                }}
            >
                Explore All Products
            </button>
        </div>
    );
};

export default Home;
