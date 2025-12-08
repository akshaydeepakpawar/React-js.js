import React from 'react'

const products = [
  {
    name: "Wireless Headphones",
    price: 2499,
    availability: "In Stock"
  },
  {
    name: "Bluetooth Speaker",
    price: 1799,
    availability: "Out of Stock"
  },
  {
    name: "Gaming Mouse",
    price: 1299,
    availability: "In Stock"
  },
  {
    name: "USB-C Charger",
    price: 899,
    availability: "Limited Stock"
  },
  {
    name: "Smartwatch",
    price: 3499,
    availability: "In Stock"
  }
];


const ProductInfo = () => {
  return (
    <div className='flex gap-3 justify-center items-center flex-wrap'>
        {products.map((x)=>{
            return <div className='border-2 rounded-lg p-10 h-[300px] w-[300px] flex flex-col justify-center shadow hover:scale-105 transition-transform duration-300' >
                <div>Name: {x.name}</div>
                <div>Price: ₹{x.price}</div>
                <div>Availability: {x.availability}</div>
            </div>
        })}
    </div>
  )
}

export default ProductInfo