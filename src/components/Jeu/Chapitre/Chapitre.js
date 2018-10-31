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
    currentPosition: 0,
    totalScore : 0
  };

  handleClick = e => {
    console.log(e.target.name);
    this.setState({
      currentPosition: e.target.name,
      // totalScore : totalScore +
    });
  };

  render() {
    console.log(jsonData[this.state.currentPosition].img);
    // if (this.state.currentPosition !== 5) {
      return (
        <div
          className="chapter-container"
          style={{backgroundImage: `url(${jsonData[this.state.currentPosition].img})`}}

        >
          <h2 className="chapter-title">{jsonData[this.state.currentPosition].storyTitle}</h2>
          <p className="chapter-text">{jsonData[this.state.currentPosition].story}</p>
          <p className="btn-container">
            <button
              name={jsonData[this.state.currentPosition].btn1.id}
              className={`choiceA ${jsonData[this.state.currentPosition].btn1.classText}`}
              onClick={this.handleClick}
            >
            {!(jsonData[this.state.currentPosition].btn1.avatar) && <i class="fas fa-ghost icon"></i>}
            {jsonData[this.state.currentPosition].btn1.avatar && <img src={jsonData[this.state.currentPosition].btn1.avatar}/>}
              <span>{jsonData[this.state.currentPosition].btn1.text}</span>
            </button>

            <button
              name={jsonData[this.state.currentPosition].btn2.id}
              className={`choiceB ${jsonData[this.state.currentPosition].btn2.classText}`}
              onClick={this.handleClick}
            >
            {!(jsonData[this.state.currentPosition].btn2.avatar) && <i class="fas fa-ghost icon"></i>}

            {jsonData[this.state.currentPosition].btn2.avatar && <img src={jsonData[this.state.currentPosition].btn2.avatar}/>}
              <span>{jsonData[this.state.currentPosition].btn2.text}</span>
            </button>
          </p>
          <p className="score">Score : {this.state.totalScore}</p>
        </div>
      );
    // } else {
    //   return (
    //   <p>hop la chocolat</p>
    //   )
    // }

  }
}
