import React from 'react'
import { useParams } from 'react-router-dom'

const Product = (props) => {
  const { id } = useParams();
  return (
    <h1>Product: {id}</h1>
  )
}

export default Product
