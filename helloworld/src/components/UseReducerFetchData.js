import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const intialState = {
    lading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function UseReducerFetchData() {
    const [state,dispatch]=useReducer(reducer,intialState)
    useEffect( ()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res=>{
                console.log(res.data);
                dispatch({type:'FETCH_SUCESS',payload:res.data})
            })
            .catch(err=>{
                console.log(err);
                dispatch({type:'FETCH_ERROR'})
            })
       },[])
    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error: null}
        </div>
    )
}

export default UseReducerFetchData
