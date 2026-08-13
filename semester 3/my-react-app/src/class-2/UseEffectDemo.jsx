import React, { useEffect, useState} from 'react'


const UseEffectDemo = () => {
let [da , changeDa]= useState([])
 let [count ,setCount]=  useState(0)
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
        return res.json()
    }).then((data)=>{
        changeDa((data)) 
        console.log(data);
    })

},[count])
  return (
    <div>
        {
            da.map((a)=>{
                return(
                    <><h4>{a.id}</h4><h3>{a.title}</h3></>

                )
            })
        }
         <h2>{count}</h2>
         
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default UseEffectDemo