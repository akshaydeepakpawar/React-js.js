import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'
import ProductList from './components/ProductList'
import Person from './components/Person'
import Product from './components/Product'


const App = () => {
  return (
    <div className='flex justify-evenly'>
      <Person name="akshay" age={22}/>
      <Product name="Lenovo monitor" price={20000}/>
    </div>
  )
}

export default App 