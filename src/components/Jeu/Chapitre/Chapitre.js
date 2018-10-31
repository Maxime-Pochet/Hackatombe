import React, { Component } from "react";
import jsonData from "../../../data.json";
import "./Chapitre.scss";
console.log(jsonData);
// const chapitreDetails = {
//   storyTitle: "",
//   story: "",
//   choiceA: "",
//   choiceB: "",
//   choiceC: ""
// };

const url =
  "https://res.cloudinary.com/dxze602g1/image/upload/v1540950614/room.png";

export default class Chapitre extends Component {
  state = {
    currentPosition: 0
  };

  handleClick = e => {
    console.log(e.target.name);
    this.setState({
      currentPosition: e.target.name
    });
  };

  render() {
    return (
      <div
        className="testContainer"
        style={{
          backgroundImage: `url(${jsonData[this.state.currentPosition].img})`,
          height: "90vh"
        }}
        // style={{
        //   backgroundColor: "red"
        // }}
      >
        <h2>{jsonData[this.state.currentPosition].storyTitle}</h2>
        <p>{jsonData[this.state.currentPosition].story}</p>
        <button
          name={jsonData[this.state.currentPosition].btn1.id}
          className="choiceA"
          onClick={this.handleClick}
        >
          {jsonData[this.state.currentPosition].btn1.text}
        </button>

        <button
          name={jsonData[this.state.currentPosition].btn2.id}
          className="choiceB"
          onClick={this.handleClick}
        >
          {jsonData[this.state.currentPosition].btn2.text}
        </button>
      </div>
    );
  }
}
