import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products");
                setProducts(res.data.products);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error.message}</h1>;
    }

    return (
        <div className="container mt-5">
            <div id="productCarousel" className="carousel slide">
                <div className="carousel-inner">
                    {products.map((product, index) => (
                        <div key={product.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img 
                                src={product.images[0]} 
                                className="d-block w-100" 
                                style={{ width: "100%", height: "720px", objectFit: 'cover' }} 
                                alt={product.title} 
                            />
                            <div className="carousel-caption d-none d-md-block" style={{color:"greenyellow"}}>
                                <h5>{product.title}</h5>
                                <p>Price: Rs {(product.price*133.5).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#productCarousel" 
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#productCarousel" 
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCarousel;
