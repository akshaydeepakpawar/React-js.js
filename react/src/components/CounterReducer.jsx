import React, { useReducer, useState } from 'react'

const CounterReducer = () => {

    const reducer=(state,action)=>{
        switch(action.type){
            case "increment" : return state+1;
            case "decrement" : return state-1;
            case "incrementByAmount" : return state + parseInt(action.payload);
            case "decrementByAmount" : return state - parseInt(action.payload);
            default : return ;
        }
    }

    const [count,dispatch]=useReducer(reducer,0);
    const [inputValue,setInputValue] =useState(0);

  return (
    <div>
        <h1 className='font-semibold font-mono'>Usereducer Example: </h1>
        <h1 className='text-3xl font-bold ml-25'>Count :{count}</h1>
        <button className='py-2 px-5 border m-5 cursor-pointer' onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button className='py-2 px-5 border m-5 cursor-pointer' onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        <div>
            <input className='p-2 border m-5' type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
            <button className='py-2 px-5 m-5 border' onClick={()=>{
                dispatch({type: "incrementByAmount" , payload: inputValue})
                setInputValue(0)
            }}>Add</button>
            <button className='py-2 px-5 m-5 border' onClick={()=>{
                dispatch({type: "decrementByAmount" , payload: inputValue})
                setInputValue(0)
            }}>Subtract</button>
        </div>
    </div>
  )
}

export default CounterReducer