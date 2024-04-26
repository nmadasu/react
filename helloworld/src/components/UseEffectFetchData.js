import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectFetchData() {
   const [post,setPost]=useState({})
   const[id,setId]=useState(1)
   const[idFromButtonClick,setIdFromButtonClick]=useState(1) 

   const handleClick=() =>{
    setIdFromButtonClick(id)
   }
   useEffect( ()=>{
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            console.log(res.data);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
   },[idFromButtonClick])
  return (
    <div>
      <input type='text' value={id} onChange={e=>setId(e.target.value)}></input>
      <button type='button' onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
    </div>
  )
}

export default UseEffectFetchData
