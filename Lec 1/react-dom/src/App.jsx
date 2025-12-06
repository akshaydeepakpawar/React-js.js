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
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting2 from './components/Greeting2'
import StyleCard from './components/StyleCard'
import ProfileCard from './components/ProfileCard'
import IconComponents from './components/IconComponents'


const App = () => {
  return (
    <div className='flex justify-evenly'>
      <StyleCard/>
      <ProfileCard/>
      <IconComponents/>
    </div>
  )
}

export default App 