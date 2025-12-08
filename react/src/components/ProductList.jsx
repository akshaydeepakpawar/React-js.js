import React from 'react'
const products = [
  { id: 1, name: "Wireless Headphones", price: 2499 },
  { id: 2, name: "Bluetooth Speaker", price: 1799 },
  { id: 3, name: "Gaming Mouse", price: 1299 },
  { id: 4, name: "USB-C Charger", price: 899 },
  { id: 5, name: "Smartwatch", price: 3499 }
];

const ProductList = () => {
  return (
    <div>
        {products.map(({id,name,price})=>{
            return <ul key={id} className='pt-5'>
                <div>name:{name}</div>
                <div>price:{price}</div>
            </ul>
        })}
    </div>
  )
}

export default ProductList