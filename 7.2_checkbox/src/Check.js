import React from "react";
import "./index.css";

class Check extends React.Component {
state={checked: ""}

  render() {
    return (
      <div>
        <input
          type="checkbox"
          className="box"
          defaultChecked={this.props.checked}
          onChange={this.changeClick}
        />
        <label>{this.props.text}</label>
      </div>
    );
  }
}

export default Check;