import React, { useEffect, useState } from 'react'
import ProductCard from '../ui/ProductCard'
import product from '../../src/product.json'
import axios from 'axios'

const DispalyProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoding, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products")
        setProducts(res.data.products)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (error) {
    return (
      <h1>{error}</h1>
    )
  }

  return (
    <div className="container-fluid">
      {
        isLoding && <h2>Loading....</h2>
      }
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          products.map((product, index) => (
            <ProductCard title={product.title}
              image={product.thumbnail}
              price={product.price * 133.5}
              description={product.description}
              id={product.id} />
          ))
        }
      </div>
    </div>
  )
}

export default DispalyProducts