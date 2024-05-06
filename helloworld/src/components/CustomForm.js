import React from 'react'
import CustomInput from './CustomInput'

function CustomForm() {

    const [firstName,bindFirstName,resetFirstName]=CustomInput('')
    const [lastName,bindLastName,resetLastName]=CustomInput('')

    const submitHandler = e =>{
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input 
                    {...bindFirstName}
                    type='text'
                />
            </div>
            <div>
                <label>Last Name</label>
                <input 
                    {...bindLastName}
                    type='text'
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default CustomForm
