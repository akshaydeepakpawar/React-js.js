import React, { useState } from 'react'
const ShoppingList = () => {

    const [items,setItems]=useState([]);
    const [name,setName]=useState("");
    const [quantity,setQuantity]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name || !quantity) return ;
        const newItem={
            name,quantity:parseInt(quantity)
        }
        setItems([...items,newItem]);
        setName("");
        setQuantity("");
    }

    return (
    <>
        <div className='bg-blue-400 p-20 flex justify-between'>
            <form onSubmit={handleSubmit} action="" className='flex gap-5 justify-center items-center'>
                name: <input className='border border-white px-5 py-2 rounded-xl' type="text" placeholder='enter your item name' value={name} onChange={(e)=>setName(e.target.value)}/>
                quantity: <input className='border border-white px-5 py-2 rounded-xl' type="text" placeholder='enter your item quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                <button type='submit' className='py-2 px-3 border rounded bg-white cursor-pointer'>Add Item</button>
            </form>
        </div>
        {items.length>0 && <p>you have {items.length} items</p>}
            <ul className=' flex flex-col gap-5 border border-slate-900'>
                {items.map((x,index)=>{
                    return <li key={index} className='bg-red-500 py-5 px-10 text-white'>
                        <h1>name: {x.name}</h1>
                        <p>Quntity: {x.quantity}</p>
                    </li>
                })}
            </ul>
    </>
    )
}

export default ShoppingList