import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreting from './components/UserGreting';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet'
import Inline from './components/Inline';
import './components/appStyle.css'
import styles from './components/appStyle.module.css'
import ClassForm from './components/ClassForm';
import { MultiTable } from './components/MultiTable';
import { Cards } from './components/Card'
import FunctionForm from './components/FunctionForm';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Service from './components/Service';
import Post from './components/Post';
import GetData from './components/GetData';
import PostData from './components/PostData';
import Crud from './components/Crud';
import CreateData from './components/CreateData';
import AddData from './components/AddData';
import Editdata from './components/Editdata';
import UseState from './components/UseState';
import UseStateObject from './components/UseStateObject';
import UseEffect from './components/UseEffect';
import UseEffectFetchData from './components/UseEffectFetchData';
import React, { useReducer } from 'react';
import UseReducer from './components/UseReducer';
import UseReduder2 from './components/UseReduder2';
import UseReducerMultiple from './components/UseReducerMultiple';
import UseContext from './components/UseContext';
import UseContextWithMultipleValue2 from './components/UseContextWithMultipleValue2';
import USeContextWithMultipleValue1 from './components/USeContextWithMultipleValue1';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import UseReducerFetchData from './components/UseReducerFetchData';
import Parent from './components/Parent';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseRef2 from './components/UseRef2';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import CustomForm from './components/CustomForm';
import UseReducerRender from './components/UseReducerRender';
import UseStateRender from './components/UseStateRender';
import ObjectUseState from './components/ObjectUseState';
import ArrayUseState from './components/ArrayUseState';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const countContex = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <UserContext.Provider value={'sanjeev'}>
        {/* <UseContext></UseContext> */}
      </UserContext.Provider>
      <UserContext.Provider value={'sanjeev'}>
        <ChannelContext.Provider value={'emotion'}>
          {/* <USeContextWithMultipleValue1></USeContextWithMultipleValue1> */}
        </ChannelContext.Provider>
      </UserContext.Provider>
      <UserContext.Provider value={'sanjeev'}>
        <ChannelContext.Provider value={'emotion'}>
          {/* <UseContextWithMultipleValue2></UseContextWithMultipleValue2> */}
        </ChannelContext.Provider>
      </UserContext.Provider>
      <Routes>
        <Route path='/post' element={<Post></Post>}></Route>
        <Route path='/function' element={<FunctionForm></FunctionForm>}></Route>
        <Route path='/table' element={<MultiTable></MultiTable>}></Route>
        <Route path='service' element={<Service></Service>}></Route>
        <Route path='/create' element={<CreateData></CreateData>}></Route>
        <Route path='/add' element={<AddData></AddData>}></Route>
        <Route path='/create' element={<PostData></PostData>}></Route>
        <Route path='/edit/:id' element={<Editdata></Editdata>}></Route>
        <Route path='/crud' element={<Crud></Crud>}></Route>
        {/* <Route path='/'element={<UseState></UseState>}></Route> */}
        {/* <Route path='/'element={<UseStateObject></UseStateObject>}></Route> */}
        {/* <Route path='/'element={<UseEffect></UseEffect>}></Route> */}
        {/* <Route path='/' element={<UseEffectFetchData></UseEffectFetchData>}></Route> */}
      </Routes>
      {/* <FunctionForm></FunctionForm> */}
      {/* <UseReducer></UseReducer>
      <UseReduder2></UseReduder2>
      <UseReducerMultiple></UseReducerMultiple> */}

      {/* <countContex.Provider 
      value={{countState:count,countDispatch:dispatch}}
      >
        Count: {count}
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
        <ComponentC></ComponentC>
      </countContex.Provider> */}
      {/* <UseReducerFetchData></UseReducerFetchData> */}
      {/* <Parent></Parent> */}
      {/* <UseMemo></UseMemo> */}
      {/* <UseRef></UseRef>
      <UseRef2></UseRef2> */}
      {/* <Counter1></Counter1>
      <Counter2></Counter2>
      <CustomForm></CustomForm> */}
      <UseReducerRender></UseReducerRender>
      <UseStateRender></UseStateRender>
      <ObjectUseState></ObjectUseState>
      <ArrayUseState></ArrayUseState>
    </div>
  );
}

export default App;
