import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, title, price, id }) => {
  return (
    <div className="col">
      <div class="card">
      <img src={image} className='card-img-top' alt="..." style={{height:'300px', widows:'100px'}} />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <h5 class="card-title">{price}</h5>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={`/product-details/${id}`}  class="btn btn-primary">View Details</Link>
          </div>
      </div>
    </div>
  )
}

export default ProductCard