import React, { useState } from "react";

import "./index.css";

function App() {

  //  store count 
  const [count, setCount] = useState(0);

  //
  const incrementfunc = () => {
    setCount(count + 1);
  };


  return (
    <div className="app">
      <button onClick={incrementfunc}>Increment</button>
      {count}
    </div>
  );
}

export default App;
