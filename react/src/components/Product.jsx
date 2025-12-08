import React from 'react'

const Product = (props) => { //use props
  return (
    <div>
        <h2>name: {props.name}</h2>
        <p>price: {props.price}</p>
    </div>
  )
}

export default Product