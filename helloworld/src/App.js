import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
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
import {Cards} from './components/Card'
import FunctionForm from './components/FunctionForm';

function App() {
  return (
    <div className="App">
      {/* <Cards></Cards> */}
      <FunctionForm></FunctionForm>
      {/* <MultiTable></MultiTable> */}
      {/* <ClassForm></ClassForm> */}
      {/* <h1 className='error'>Error</h1> */}

      {/* <h1 className={styles.success}>Success</h1> */}

      {/* <Inline></Inline> */}

      {/* <StyleSheet primary={false}></StyleSheet> */}

      {/* <NameList></NameList> */}

      {/* <UserGreting></UserGreting> */}
      
      {/*<ParentComponent></ParentComponent> */}

      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}

      {/* <Counter></Counter> */}

      {/* <Message></Message> */}

     {/* {<Greet name='Bruce' heroName='Batman'>
      <p>this is children props</p>
     </Greet> } */}

     {/* <Greet name='Bruce' heroName='SuperMan'>
      <button>ACtion</button>
     </Greet> */}

     {/* <Welcome name='Bruce' heroName='Batman'>
     <p>this is children props</p>
     <button>ACtion</button>
     </Welcome> */}

     {/* <Welcome name='Bruce' heroName='SuperMan'></Welcome>  */}

     {/* <Hello/> */}

    </div>
  );
}

export default App;
