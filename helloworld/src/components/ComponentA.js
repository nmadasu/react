import React, { useContext } from 'react'
import { countContex } from '../App'

function ComponentA() {
    const countContext=useContext(countContex)
  return (
    <div>
      Component A: 
      <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
