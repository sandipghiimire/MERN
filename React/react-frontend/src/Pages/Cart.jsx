import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartItems(cartData);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartData", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to shop</Link></p>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {cartItems.map(item => (
              <div key={item.id} className="col">
                <div className="card">
                  <img src={item.images[0]} alt={item.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Rs. {item.price * 133.5}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
