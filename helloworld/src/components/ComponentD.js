import React, { useContext } from 'react'
import { countContex } from '../App'

function ComponentD() {
    const countContext = useContext(countContex)
    return (
        <div>
            Componnet D: 
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
