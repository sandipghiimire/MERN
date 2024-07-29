import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = ({id}) => {
    const params = useParams()
  return (
    <>
        This is product details page
        <p>Product Id : {params.productId}</p>

    </>
  )
}

export default ProductDetails