import React, { useState } from 'react'

const initState={
    fname:'sanjeev',
    lname:'Madasu'
}
const ObjectUseState = () => {
    const [person,setPerson]=useState(initState)
    const changeName =()=>{
        //value not changing
        // person.fname='raman'
        // person.lname='mohan'
        // setPerson(person)

        const newPerson={...person}
        newPerson.fname='ram'
        newPerson.lname='mohan'
        setPerson(newPerson)
    }
    console.log("object use state render");
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
