import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';

const Products = () => {

    const productData = useContext(ProductDataContext);

    let renderProducts = <p className='text-center w-full text-gray-500 text-xl center'>Loading...</p>;

    if(productData && productData.length > 0) {
        renderProducts = productData.map((item) => {
            return (
                <Link 
                    className='product flex flex-col justify-between items-center text-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1' 
                    key={item.id} 
                    to={`/products/${item.id}`}
                >
                    <img className='h-48 object-contain mb-4' src={item.thumbnail} alt={item.title} />
                    <div className='flex flex-col grow justify-end w-full'>
                        <h3 className='text-lg font-semibold text-gray-800 line-clamp-2'>{item.title}</h3>
                        <p className='price text-xl font-bold text-green-600 mt-2'>₹{((item.price * 83).toFixed(2))}</p>
                    </div>
                </Link>
            )
        })
    }

    return (
        <div className='productsPage min-h-screen bg-gray-50 py-10 px-4 md:px-10 lg:px-20'>
            <h2 className='products-heading text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 text-center mb-10 pb-2'>
                Explore Products
            </h2>
            <div className='allProducts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
                {renderProducts}
            </div>
        </div>
    )
}

export default Products
