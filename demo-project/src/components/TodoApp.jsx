import React, { useState } from 'react'

const TodoApp = () => {

    const [todos,setTodo]=useState([]);
    const [input,setInput]=useState("");

    const submitHandler =()=>{
        setTodo((todos)=>{
            return todos.concat({
                text:input,
                id: Math.floor(Math.random() * 1000)
            })
        })
        setInput("")
    }
    const removeTodo=(id)=>{
        setTodo(todos=>todos.filter(t=>t.id!=id))
    }


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 pt-10">
        <div className='border mt-5 mx-auto p-4 w-[50%] rounded-md flex justify-center items-center gap-5 '>
            <input type="text" className='border px-5 py-2 rounded-xl'placeholder='Enter your TODO' value={input} 
            onChange={(e)=>setInput(e.target.value)}/>
            <button className='border p-1 rounded-md cursor-pointer' onClick={submitHandler}>Add todo</button>
        </div>
        <ul className="mt-5 w-[50%] mx-auto space-y-3">
            {todos.map(({text,id})=><li className="border px-4 py-2 rounded-lg shadow-sm bg-white flex justify-between items-center" key={id}>
                <span>
                {text}
                </span>
                <button className='border rounded-4xl p-2 cursor-pointer bg-red-500 text-white' onClick={()=>removeTodo(id)}>X</button>
                </li>)}
        </ul>
    </div>
  )
}

export default TodoApp