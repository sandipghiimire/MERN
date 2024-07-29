import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, title, price, id, description }) => {
  return (
    <div className="col">
      <div class="card">
      <h5 class="card-title">{title}</h5>
      <img src={image} className='card-img-top' alt="..." style={{height:'300px', widows:'100px'}} />
          <div class="card-body">
            
            <h5 class="card-title">Price : Rs, {price}</h5>
            <p>{description}</p>
            <Link to={`/product-details/${id}`}  class="btn btn-primary">View Details</Link>
            <Link class="btn btn-danger" style={{margin:'0px 0px 0px 10px'}}>Add to Cart</Link>
          </div>
      </div>
    </div>
  )
}

export default ProductCard