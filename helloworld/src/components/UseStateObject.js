import { Input } from '@mui/material'
import React, { useState } from 'react'

function UseStateObject() {
  const[name,setName]=useState({
    phoneNumber:'',
    name:'',
  })
  return (
    <div>
      <form>
        <label>Name: </label>
        <input type='text' value={name.name} onChange={e=>setName({...name,name:e.target.value})}></input>&nbsp;
        <label>Phone Number: </label>
        <input type='text' value={name.phoneNumber} onChange={e=>setName({...name,phoneNumber:e.target.value})}></input>
      </form>
    </div>
  )
}

export default UseStateObject
