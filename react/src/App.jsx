import React, { use, useEffect, useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'
import ProductList from './components/ProductList'
import Person from './components/Person'
import Product from './components/Product'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting2 from './components/Greeting2'
import StyleCard from './components/StyleCard'
import ProfileCard from './components/ProfileCard'
import IconComponents from './components/IconComponents'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'


const App = () => {
 
  const [data,setData]=useState([]);

  //this callback function runs only once
  useEffect(()=>{
   const fetchData =async()=>{
      const data= await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
      if(data && data.length)
        setData(data);
    }
    fetchData();
  },[])

  return (
    <div className=''>
      <ul>
        {data.map((user)=>{
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </div>
  )
}

export default App 