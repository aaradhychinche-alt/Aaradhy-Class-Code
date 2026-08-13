import React from 'react'
import './Navbar.css' 
import { Link } from 'react-router-dom'
import ProductList from '../class-4/Productlist'
const Navbar = () => {
  return (
    <div className='nav'>
        <Link to={'/'}>   <li>Home</li></Link>
     
         <Link to={'/About'}> <li>About</li></Link>
       
         <Link to={'/Contact'}> <li>Contact</li></Link>
         <Link to={'/list'}>list</Link>
         
       
    </div>
  )
}

export default Navbar