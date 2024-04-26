import React, { useState } from 'react'

function UseState() {
const[count,setCount]=useState(0)
const intialCount=0
const[count1,setCount1]=useState(intialCount)
const incrementFive=()=>{
    for (let i=0;i<5;i++){
        setCount1(prevCount=>prevCount+1)
    }
}
 return (
    <div>
        <button onClick={()=>setCount(count+1)}>Count {count}</button>
        Count: {count1} 
        <button onClick={()=>setCount1(intialCount)}>Reset</button>
        <button onClick={()=>setCount1(count1+1)}>Increment</button>
        <button onClick={()=>setCount1(count1-1)}>Decrement</button>
        <button onClick={incrementFive}>Increment Five</button>
    </div>
  )
}

export default UseState
