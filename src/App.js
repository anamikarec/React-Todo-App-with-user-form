import { useState } from 'react';
import './App.css';
import { Todo } from './Components/Todo/Todo';
import {FormData} from "./Components/FormData/FormData"

function App() {
  const [isAuth,setIsAuth] = useState(true);
  const [isLoading,setLoading] = useState(false);
  const [isError,setError] = useState(false);
  function login(){
    // console.log(isAuth);
    setIsAuth(true);
  }
  return !isAuth ? (
    <>
    <div>
      User is not logged in
    </div>
    <button onClick = {()=>login()}>Login</button>
    </>
  ) : isLoading ? (
    <div>...loading</div>
  ): isError ? (
    <div>Something went wrong!</div>
  ) : 
  (
    <div className="App">
      <h1>FormData with multiple objects</h1>
      <FormData/>
     <Todo/>
    </div>
  );

}

export default App;
