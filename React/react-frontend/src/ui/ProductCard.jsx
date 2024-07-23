import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="col">
      <div class="card">
      <img src={image} className='card-img-top' alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}

export default ProductCard