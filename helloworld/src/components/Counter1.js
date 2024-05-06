import React from 'react'
import CounterCustom from './CounterCustom'

function Counter1() {
    const [count, increment,decrement,reset]=CounterCustom(0,1)
  return (
    <div>
        <h2>Count ={count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1
