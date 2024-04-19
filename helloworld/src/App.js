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
function App() {
  return (
   <div>
    <Routes>
      <Route path='/post' element={<Post></Post>}></Route>
      <Route path='/function' element={<FunctionForm></FunctionForm>}></Route>
      <Route path='/table' element={<MultiTable></MultiTable>}></Route>
      <Route path='service' element={<Service></Service>}></Route>
      <Route path='/' element={<CreateData></CreateData>}></Route>
      <Route path='/add' element={<AddData></AddData>}></Route>
      <Route path='/create' element={<PostData></PostData>}></Route>
      <Route path='/edit/:id' element={<Editdata></Editdata>}></Route>
      <Route path='/crud' element={<Crud></Crud>}></Route>
    </Routes>
    {/* <FunctionForm></FunctionForm> */}
   </div>
  );
}

export default App;
