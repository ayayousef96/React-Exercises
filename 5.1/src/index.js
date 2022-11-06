import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./Button";

if (module.hot) {
  module.hot.accept();
}

const App = function (){

return (
<div>
  
  <Button mystyle={{fontWeight:"bold"}}  text='IMPORTANT'/>
  <Button text='Not important!' mystyle={{ fontWeight:"normal" }}/>
</div>
);
};

ReactDOM.render(<App />, document.getElementById("root"));

