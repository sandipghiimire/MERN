import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from '../ui/ProductCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const id = params.productId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductAndCategory = async () => {
      try {
        const productResponse = await axios.get(`https://dummyjson.com/products/${id}`);
        const product = productResponse.data;
        setProduct(product);

        if (product?.category) {
          const categoryResponse = await axios.get(`https://dummyjson.com/products/category/${product.category}`);
          setProductsByCategory(categoryResponse.data.products);
          console.log("Products by Category", categoryResponse.data);
        }
      } catch (error) {
        setError("Failed to fetch product details. Please try again later.");
        console.error("Error fetching product or category:", error);
      }
    };

    fetchProductAndCategory();
  }, [id]);

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cartItem")) ?? [];
    const found = cart.find((item) => item.id===product.id)

    if(found) {
      found.quantity+=1
      localStorage.setItem("cartItem", JSON.stringify(cart));
      toast.success(`${product.title} x ${found.quantity} is added to the cart`)
      // cart[found].quantity += quantity;  
    }else{
        cart.push({...product,quantity:1});
        localStorage.setItem("cartItem", JSON.stringify(cart));
        toast.success(`${product.title} x 1 is added to the cart`)
      }
    
    // navigate('/cart');
  };

  return (
    <>
    <ToastContainer />
      {error ? (
        <p>{error}</p>
      ) : product ? (
        <div className="container my-2">
          <div className="row">
            <div className="col-md-6">
              <img src={product.images[0]} alt={`Image of ${product.title}`} className="img-fluid" width={500} />
            </div>
            <div className="col-md-6">
              <h1 className="text-muted">{product.title}</h1>
              <h2>Rs. {(product.price * 133.5).toFixed(2)}</h2>
              <p>{product.description}</p>
              <p>Category: {product.category}</p>
              <div className="">
                <button className="btn btn-warning" onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>There is not a valid product</p>
      )}
      <hr />
      <div className="container my-4 text-center">
        <h1 className="text-center">More For You</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {productsByCategory.filter(prod => prod.id !== product.id).map((product) => (
            <ProductCard 
              key={product.id}
              image={product.thumbnail}
              title={product.title}
              price={(product.price * 133.5).toFixed(2)}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
