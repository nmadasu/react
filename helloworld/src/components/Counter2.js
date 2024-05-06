import React from 'react'
import CounterCustom from './CounterCustom'

function Counter2() {
    const [count,increment,decrement,reset]=CounterCustom(10,10)
  return (
    <div>
        <h2>Count ={count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter2
