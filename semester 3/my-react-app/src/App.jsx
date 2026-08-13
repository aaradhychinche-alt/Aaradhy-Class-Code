import React, { useState } from 'react'
import Home from './Home'
import UseEffectDemo from './class-2/UseEffectDemo'
import Navbar from './class-3/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './class-3/About'
import Contact from './class-3/Contact'
import Productlist from './class-4/Productlist'
import ProductD from './class-4/ProdcutD'
import UseReducerDemo from './class-5/UseReducerDemo'
import ToDoList from './class-5/ToDoList(reducer)'
import MemoDemo from './class-6/MemoDemo'
import Assignments from './class-7/Assignments'



const App = () => {

 
  return (

     <div>

       {/* class-2 */}
      {/* <UseEffectDemo/> */}

      {/* class-3 */}
       {/* <Navbar/> */}


        {/* class-4 */}
      {/* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} /> */}
      {/* <Route path='/Contact' element={<Contact/>} /> */}
      {/* <Route path='/list'  element={<Productlist/>}/>
      <Route path='/p/:id' element={<ProductD/>} />
      </Routes> */}

      {/* class-5 */}
   {/* <UseReducerDemo/>
   <br/>
   <ToDoList/> */}
   {/* class-6 */}
   {/* <MemoDemo/> */}

   {/* class-7 */}
   <Assignments/>
    </div>
      

  )
}

export default App