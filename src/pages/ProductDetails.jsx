import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const productData = useContext(ProductDataContext);

  if (productData.length === 0) {
    return (
      <div className='min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-6'>
        <h2 className='text-3xl font-semibold text-gray-500 animate-pulse'>Loading Product Details...</h2>
      </div>
    );
  }
  
  const selectedProduct = productData.find((elem) => elem.id == productId);

  if (!selectedProduct) {
    return (
      <div className='min-h-[calc(100vh-80px)] bg-gray-50 flex flex-col items-center justify-center p-6 gap-6'>
        <h2 className='text-3xl font-bold text-gray-800'>Product Not Found</h2>
        <button 
          onClick={() => navigate(-1)} 
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-md transition-all'
        >
          &larr; Go Back
        </button>
      </div>
    );
  }

  return (
    <div className='min-h-[calc(100vh-80px)] bg-gray-50 py-8 px-6 md:px-12 flex flex-col'>
      <div className='max-w-6xl mx-auto w-full grow flex flex-col justify-center'>
        <button 
          onClick={() => navigate(-1)} 
          className='flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors group self-start'
        >
          <span className='mr-2 group-hover:-translate-x-1 transition-transform'>&larr;</span> 
          Back to Products
        </button>
        
        <div className='flex flex-col md:flex-row gap-8 bg-white p-6 md:p-10 rounded-3xl shadow-xl overflow-hidden border border-gray-100 items-stretch'>
          
          {/* Image Section */}
          <div className='w-full md:flex-1 flex items-center justify-center bg-gray-50 rounded-2xl p-6'>
            <img 
              src={selectedProduct.thumbnail} 
              alt={selectedProduct.title} 
              className='w-full max-h-100 object-contain rounded-xl drop-shadow-md' 
            />
          </div>
          
          {/* Product Info Section */}
          <div className='w-full md:flex-1 flex flex-col justify-center gap-4 md:gap-6'>
            <div>
              <h3 className='text-2xl md:text-4xl font-extrabold text-gray-900 mb-2'>
                {selectedProduct.title}
              </h3>
              <p className='text-sm font-semibold text-indigo-500 uppercase tracking-wider mb-2'>
                {selectedProduct.category || 'Category'} 
              </p>
            </div>
            
            <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-prose border-y border-gray-100 py-4'>
              {selectedProduct.description}
            </p>
            
            <div className='mt-2'>
              <span className='text-sm text-gray-500 block mb-1'>Exclusive Price</span>
              <p className='text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2'>
                ₹{((selectedProduct.price * 83).toFixed(2))}
                {selectedProduct.discountPercentage && (
                  <span className='text-xs md:text-sm font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full ml-4 tracking-wide relative -top-1'>
                    {selectedProduct.discountPercentage}% OFF
                  </span>
                )}
              </p>
            </div>

            <button className='mt-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all w-full md:w-auto self-start'>
              Add to Cart
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
