import React, { useState } from 'react'


const TodoList = () => {
    const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([]);
    
    const addTodo=()=>{
        setTodos([...todos,todo]);
        setTodo("");
    }
  return (
    <div>
        <input type="text" placeholder='enter your todo' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.length>0 && <p>you have {todos.length} todos</p>}
        {todos.map((x,i)=>{
            return <li key={i}>{x}</li>
        })}
        </ul>
    </div>
  )
}

export default TodoList