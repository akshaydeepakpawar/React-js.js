import React from 'react'

const users = [
  { id: 1, name: "Akshay", age: 23 },
  { id: 2, name: "Rohan", age: 24 },
  { id: 3, name: "Neha", age: 22 },
  { id: 4, name: "Sagar", age: 25 },
  { id: 5, name: "Priya", age: 23 }
];

const UserList = () => {
  return (
    <div>
        {users.map(({id,name,age})=>{
            return <ul key={id} className='pt-5'>
                <div>name:{name}</div>
                <div>age:{age}</div>
            </ul>
        })}
    </div>
  )
}

export default UserList