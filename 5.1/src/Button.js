import React from "react";
import "./index.css";

const Button = (props) =>{
    console.log(props);
    return(
        <button style={props.mystyle} className="btn">{props.text}
        </button>
    );
};

export default Button;