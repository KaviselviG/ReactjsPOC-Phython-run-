import React, { useState } from 'react';
import './App.css';

axios.defaults.baseURL = 'http://localhost:3001'
function App() {
const [name, setName] = useState();

const postReq = () =>{
  fetch('http://localhost:3001/?name="John"&age=27')
  .then(response=>response.json())
  .then(response => 
    {
      setName(response);
      console.log((response))
    })
    .catch(error => 
      {
        console.log(error)
      })
}

  return (
    <div className="App">
        <h1>Run Python script from node js</h1>
        <button className="postReq" onClick={postReq}>Submit</button>
        <br/>
        <div>{name}</div>
    </div>
  );

}

export default App;
