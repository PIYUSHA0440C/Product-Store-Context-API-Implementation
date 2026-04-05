import React, { createContext, useEffect, useState } from 'react'
import { getAllProductData } from '../api/productApi';

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {

    const [productData, setProductData] = useState([])
    const [selectedProductData, setSelectedProductData] = useState({});

    const setData = async () => {
        
        setProductData(await getAllProductData());
    }

    useEffect(() => {
        setData();
    }, [])


    return (
        <div>
            <ProductDataContext.Provider value={productData}>
                {children}
            </ProductDataContext.Provider>
        </div>
    )
}

export default ProductContext
