// import React from 'react'
// import { Link, useParams } from 'react-router-dom'

// const ProductDetails = ({id}) => {
//     const params = useParams()
//   return (
//     <>
//         This is product details page
//         <p>Product Id : {params.productID}</p>

//     </>
//   )
// }

// export default ProductDetails

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div className="product-details-container">
      {product && (
        <>
          <div className="product-image">
            <img src={product.thumbnail} alt={product.title} />
            <h1><button type="button" class="btn btn-secondary">Rs, {product.price*133.5}</button></h1>
          </div>
          <div className="product-info">
            <h1>{product.title}</h1>
            <p>Product Id: {product.id}</p>
            <p>Description: {product.description}</p>
            <p>Rating: {product.rating}</p>
            <p>Product Tag: {product.tags ? product.tags.join(', ') : 'N/A'}</p>
            <p>Discount Percentage: {product.discountPercentage}%</p>
            <p>Category: {product.category}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
