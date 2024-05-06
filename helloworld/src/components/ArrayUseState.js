import React, { useState } from 'react'

const initState=['naga','sanjeev']

const ArrayUseState = () => {
    const [persons,setPersons]=useState(initState)
    const handleClick =()=>{
        // values not entered in the array
        // persons.push('ram')
        // person.push('lucky')
        // setPersons(persons)

        const newPersons=[...persons]
        newPersons.push('ram')
        newPersons.push('lucky')
        setPersons(newPersons)
    }
    console.log("array use state render");
  return (
    <div>
        <button onClick={handleClick}>Click </button>
            {persons.map(person=>(
                <div key={person}>{person}</div>
            ))}
    </div>
  )
}

export default ArrayUseState
