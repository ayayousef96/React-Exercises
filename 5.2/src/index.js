import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";


if (module.hot) {
  module.hot.accept();
}

const App = function () {
  return (
    <div className="card-container">
      <Card
        image={
          "https://picsum.photos/200/200?random=1"
        }
        title="card 1"
        description="first"
      />
      <Card
        image={
          "https://picsum.photos/200/200?random=5"
        }
        title="card 2"
        description="second"
      />
      <Card
        image={
          "https://picsum.photos/200/200?random=10"
        }
        title="card 3"
        description="third"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
