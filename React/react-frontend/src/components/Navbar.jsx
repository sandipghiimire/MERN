import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const itemCount = cartData.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemCount(itemCount);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Registration</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart"></i> 
                {/* <span className="badge bg-primary ms-2">{cartItemCount}</span> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
