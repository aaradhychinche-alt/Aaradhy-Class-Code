import React, { useState } from 'react'
import A from './class-4/A'
const Home = () => {
    let[input , setInput] = useState("")
  return (
    <div>
        <input onChange={()=>setInput(input)}></input>
        <A/>
        <h3>Type above</h3>
    </div>
  )
}

export default Home