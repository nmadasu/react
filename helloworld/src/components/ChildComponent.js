import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet Parenrt</button>
        {/* <button onClick={()=>props.greetHandler('child')}></button> */}
    </div>
  )
}

export default ChildComponent
