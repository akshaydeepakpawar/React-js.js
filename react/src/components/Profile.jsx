import React, { useState } from 'react'


const data={
    name:"akshay",
    age:22
}
const Profile = () => {
    const [age,setAge]=useState("");
    const [name,setName]=useState("");
    const [user,setUser]=useState(data);

    const updateName=()=>{
        setUser({...user,name:name})
        setName("");
    }
    const updateAge=()=>{
        setUser({...user,age:Number(age)})
        setAge("");
    }

  return (
    <div>
        <div>
        update name: <input type="text" placeholder='Update the name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={updateName}>update name</button>
        </div>
        <div>
        update age: <input type="number" placeholder='Update the age' value={age} onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={updateAge}>update age</button>
        </div>
        <ul>
            <li>{user.name}</li>
            <li>{user.age}</li>
        </ul>
    </div>
  )
}

export default Profile