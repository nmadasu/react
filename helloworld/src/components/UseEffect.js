import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect- updating the document title');
        document.titel = `ou clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>&nbsp;
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}
export default UseEffect
