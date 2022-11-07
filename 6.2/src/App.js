import React, { useState } from "react";
import './App.css';



function App() {
  const [hide, setHide] = useState(false);

  const hideOrshow = () =>{
    setHide(!hide);

  };

  return(
    <div>
      <button onClick={hideOrshow}>hide/show</button>
      {hide ? null : <div className="yellow-box"></div> }
      
    </div>
  )
  
}

export default App;
