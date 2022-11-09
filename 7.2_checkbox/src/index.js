import React from "react";
import ReactDOM from "react-dom";
import Check from "./Check";
import "./index.css";



class App extends React.Component {
    
  render() {
    return (
      <div className="container">
        <Check text="I read the terms of the app"/>
        <Check text="I accept the terms of the app"/>
        <Check text="I want to get the weekly news" checked={true}/>
        <Check text="I want to get sales and offers" checked={true}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
