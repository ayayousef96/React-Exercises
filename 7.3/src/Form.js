import React from "react";


function FormReview(props) {
    return (
      <div>
        <p>first name: {props.fname}</p>
        <p>last name: {props.lname}</p>
        <p>age:{props.age}</p>
        <p>text: {props.text}</p>
      </div>
    );
  }
  
  class Form extends React.Component {
    state = {
      fname: "",
      lname: "",
      age: "",
      text: "",
    };
  
    show = () => {
      document.querySelector(".form-review").style.visibility = "visible";
      document.querySelector("form").style.visibility = "hidden";
    };
  
    hide = () => {
      document.querySelector(".form-review").style.visibility = "hidden";
      document.querySelector("form").style.visibility = "visible";
    };
  
    render() {
      return (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>First Name:</label>
              <br />
              <input
                type="text"
                value={this.state.fname}
                onChange={(e) => this.setState({ fname: e.target.value })}
              ></input>
            </div>
            <div>
              <label>Last Name:</label>
              <br />
              <input
                type="text"
                value={this.state.lname}
                onChange={(e) => this.setState({ lname: e.target.value })}
              ></input>
            </div>
            <div>
              <label>Age</label>
              <br />
              <select
                value={this.state.age}
                onChange={(e) => this.setState({ age: e.target.value })}
              >
                <option disabled hidden value="">
                  Choose here
                </option>
                <option value="0-15">0-15</option>
                <option value="15-30">15-30</option>
                <option value="30-50">30-50</option>
                <option value="50-100">50-100</option>
              </select>
            </div>
            <div>
              <label>Free Text</label>
              <br />
              <input
                type="text"
                value={this.state.text}
                onChange={(e) => this.setState({ text: e.target.value })}
                style={{rows:"4"}}
              ></input>
            </div>
            <br />
            <button type="submit" onClick={this.show}>
              continue
            </button>
          </form>
          <br />
          <br />
          <br />
          <div
            className="form-review"
            style={{ visibility: "hidden", position: "absolute", top: "0" }}
          >
            <form>
              <FormReview
                fname={this.state.fname}
                lname={this.state.lname}
                age={this.state.age}
                text={this.state.text}
              />
              <button
                onClick={(e) => {
                  this.hide();
                  e.preventDefault();
                }}
              >
                back
              </button>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      );
    }
  }
 export default Form;  