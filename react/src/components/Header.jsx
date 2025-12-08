import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-around items-center border-2 p-4 sticky font-poppins'>
        <h1 className='font-bold text-3xl text-slate-800'>Welcome to my website</h1>
        <nav className='flex gap-40 text-md'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Content</a>
        </nav>
    </header>
  )
}

export default Header