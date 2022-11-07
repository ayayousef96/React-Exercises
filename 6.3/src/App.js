import React, { useState } from "react";
import './App.css';

function App() {

  const [value, setValue] = useState(0);

  const incrementfunc = () => {
    setValue(value + 1);
  };

  const decrementfunc = () => {
    setValue(value - 1);

  }
  return (
    <div className="app">
      <button onClick={incrementfunc}>Increment</button>
      <button onClick={decrementfunc}>Decrement</button>
      <br></br>
      
     
      {value <-10 ? setValue(-10) : value > 10 ? setValue(10) : value >= 0 ? <h1 style={{color: "green"}}> {value}</h1> : <h1 style={{color: "red"}}> {value}</h1>}
      
      
    </div>
    
  );
}

export default App;
