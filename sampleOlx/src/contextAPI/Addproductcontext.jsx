import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export function AddproductProvider({children}) {
    const [products, setproducts] = useState([]);

    const addproduct = async (formData) => {
        try {
           
            const response = await axios.post(
                'http://localhost:8000/api/data/addproduct',
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            
            
            setproducts(prevProducts => [...prevProducts, response.data]);
            
            return response.data; 
        } catch (error) {
            console.error('Error adding product:', error);
            throw error; 
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/data/products');
            setproducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    };
 
    return (
        <ProductContext.Provider value={{
            products,
            setproducts,
            addproduct,
            fetchProducts
        }}>
            {children}
        </ProductContext.Provider>
    );
}

