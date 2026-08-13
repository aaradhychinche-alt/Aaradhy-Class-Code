import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const MemoDemo = () => {
    let[count,setCount]=useState(0)

  let data = useMemo(()=>{
    let res = 0;
    for(let i =0;i<1000000;i++){
        res+=i
    }
    return res;
  } 
,[])
    let demo = ()=>{
        console.log("jellooo");
        
    }
    let fun = useCallback(demo,[])
    let obj = {
        id:1,
        name:"om"
    }
    localStorage.setItem("key",JSON.stringify(obj))
  return (
    <div>
<h2>res:{data}</h2>
<h3>{count}</h3>
<button onClick={()=>setCount(count+1)}>add</button> 

<Child fun={fun}/> 
{/*  when the value of props changes the child component re-renders even if we use memo
                   but to avoid a this when prop is function we use useCallback() */}
    </div>


  )
}

export default MemoDemo