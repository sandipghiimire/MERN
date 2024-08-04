import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartItem")) || [];
    setCartItems(cartData);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItem", JSON.stringify(updatedCartItems));
  };

  const totalPrice = cartItems.reduce((acc, item) =>
    acc + item.price * 133 * item.quantity, 0
  );

  return (
    <div className="container my-4">
      <h1 className="text-center">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go back to shop</Link></p>
      ) : (

        <div>
          <div className="row row-cols-1 row-cols-md-1 g-4 ">
            {cartItems.map(item => (

              <div className="card mb-3 mx-5" style={{ maxWidth: '900px' }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.images[0]} alt={item.title} className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-muted">Rs {(item.price * 133).toFixed(2)}
                          <p className="card-text">Quantity: {item.quantity}</p></span>
                        <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-end">

            <p>Total Price :{totalPrice.toFixed(2)} </p>
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
