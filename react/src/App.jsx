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
import BesicEffect from './components/BesicEffect'
import ApicalluseEffect from './components/ApicalluseEffect'
import { UserProvider } from './components/UserContext'
import UserProfile from './components/UserProfile'
import UpdateUser from './components/UpdateUser'
import CounterReducer from './components/CounterReducer'


const App = () => {
  return (
    <div className=''>
        <CounterReducer/>
    </div>
  )
}

export default App 