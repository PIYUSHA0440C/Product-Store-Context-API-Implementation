import axios from "axios";

export const getAllProductData = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    return response.data.products;
}

export const getSelectedProductData = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(response.data);
   return response.data;
}