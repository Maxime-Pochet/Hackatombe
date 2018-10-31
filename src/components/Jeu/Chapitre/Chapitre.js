import React, { Component } from "react";
import jsonData from "../../../data.json";
console.log(jsonData);
// const chapitreDetails = {
//   storyTitle: "",
//   story: "",
//   choiceA: "",
//   choiceB: "",
//   choiceC: ""
// };

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
      <div>
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
