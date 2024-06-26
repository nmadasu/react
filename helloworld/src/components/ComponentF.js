import React, { useContext } from 'react'
import { countContex } from '../App'

function ComponentF() {
    const countContext = useContext(countContex)
    return (
        <div>
            Component F: 
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
