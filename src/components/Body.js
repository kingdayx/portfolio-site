import React, { Component } from "react";
import "../App.css";

class Body extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          src={require("../assets/pic.jpg")}
          alt="the developer"
          width="500"
          height="600"
          className="image"
        />
      </div>
    );
  }
}

export default Body;
