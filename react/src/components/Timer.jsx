import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

const intervalRef=useRef(null);
const [count,setCount]=useState(0);

useEffect(()=>{
    intervalRef.current=setInterval(()=>{
        setCount(count=>count+1);
    },1000)
    return ()=>clearInterval(intervalRef.current);
},[])

  return (
    <div>
        <h1 className='text-3xl'>{count}</h1>
        <button className='py-2 px-5 border' onClick={()=>clearInterval(intervalRef.current)}>stop</button>
    </div>
  )
}

export default Timer