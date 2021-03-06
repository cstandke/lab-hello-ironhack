import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Display">
        <div className="NavBar">
          <img src="./images/ironhack-logo.svg" alt="ironhack-logo"></img>
          <img src="./images/menu-top.svg" alt="top-menu"></img>
        </div>
      <div classsName="TextBox">
        <h1>Say Hello to <br></br>ReactJS</h1>
        <p>You will learn a <br></br>Frontend framework from scratch to <br></br>become a Ninja developer</p>
        <button>Awesome!</button>
      </div>
      </div>
      <div className="IconBar">
        <div className="IconTab">
          <img src="./images/icon1.png"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="IconTab">
          <img src="./images/icon2.png"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="IconTab">
          <img src="./images/icon3.png"></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className="IconTab">
          <img src="./images/icon4.png"></img>
          <h2>JSX</h2>
          <p>Statically typed designed to run on modern browsers</p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;