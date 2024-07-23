import React from 'react'
import ProductCard from '../ui/ProductCard'
import product from '../../src/product.json'

const DispalyProducts = () => {
  return (
    <div className="container-fluid">

    <div className="row row-cols-1 row-cols-md-4 g-4">
        {
            product.map((product, index) =>(
                <ProductCard image={product.product_image_url}
                price={product.product_price}
                title={product.product_title}/>
            ) )
        }
    </div>
    </div>
  )
}

export default DispalyProducts