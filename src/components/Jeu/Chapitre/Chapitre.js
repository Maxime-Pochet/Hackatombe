import React, { Component } from "react";
import jsonData from "../../../data.json";
import { NavLink } from "react-router-dom";
import TheEnd from "../End/TheEnd";
import "./Chapitre.scss";

const url =
  "https://res.cloudinary.com/dxze602g1/image/upload/v1540950614/room.png";

export default class Chapitre extends Component {
  state = {
    currentPosition: 0,
    totalScore: 0,
    avatar: jsonData[0].avatar
  };

  handleClickButton1 = e => {
    this.setState({
      currentPosition: e.target.name,
      totalScore:
        this.state.totalScore +
        parseInt(jsonData[this.state.currentPosition].btn1.score)
    });
    if (
      this.state.avatar === jsonData[0].avatar ||
      jsonData[this.state.currentPosition].id === "0"
    ) {
      this.setState({ avatar: jsonData[0].btn1.avatar });
    } else {
      return this.state.avatar;
    }
  };

  handleClickButton2 = e => {
    this.setState({
      currentPosition: e.target.name,
      totalScore:
        this.state.totalScore +
        parseInt(jsonData[this.state.currentPosition].btn2.score)
    });
    if (
      this.state.avatar === jsonData[0].avatar ||
      jsonData[this.state.currentPosition].id === "0"
    ) {
      this.setState({ avatar: jsonData[0].btn2.avatar });
    } else {
      return this.state.avatar;
    }
  };
  render() {
    if (
      (this.state.currentPosition === "5" &&
        this.state.avatar === jsonData[0].btn1.avatar) ||
      (this.state.currentPosition === "13" &&
        this.state.avatar === jsonData[0].btn1.avatar)
    ) {
      return <p>Je meurs je suis un zombie</p>;
    } else if (
      this.state.currentPosition === "9" &&
      this.state.avatar === jsonData[0].btn2.avatar
    ) {
      return <p>Je meurs je suis une citrouille</p>;
    } else if (this.state.currentPosition === "7") {
      return <p>Je meurs je suis une citrouille</p>;
    } else if (this.state.currentPosition === "10") {
      return <TheEnd score={this.state.totalScore} />;
    } else {
      return (
        <div
          className="chapter-container"
          style={{
            backgroundImage: `url(${jsonData[this.state.currentPosition].img})`
          }}
        >
          <NavLink className="back-home" to="/prologue">
            <i class="fas fa-door-open" />
          </NavLink>
          <div className="pseudo-card">
            <img src={this.state.avatar} />
            <p>{this.props.location.state.pseudo}</p>
          </div>
          <h2 className="chapter-title">
            {jsonData[this.state.currentPosition].storyTitle}
          </h2>
          <p className="chapter-text">
            {jsonData[this.state.currentPosition].story}
          </p>
          <p className="btn-container">
            <button
              name={jsonData[this.state.currentPosition].btn1.id}
              className={`choiceA ${
                jsonData[this.state.currentPosition].btn1.classText
              }`}
              onClick={this.handleClickButton1}
            >
              {!jsonData[this.state.currentPosition].btn1.avatar && (
                <i class="fas fa-ghost icon" />
              )}
              {jsonData[this.state.currentPosition].btn1.avatar && (
                <img src={jsonData[this.state.currentPosition].btn1.avatar} />
              )}
              <span>{jsonData[this.state.currentPosition].btn1.text}</span>
            </button>

            <button
              name={jsonData[this.state.currentPosition].btn2.id}
              className={`choiceB ${
                jsonData[this.state.currentPosition].btn2.classText
              }`}
              onClick={this.handleClickButton2}
            >
              {!jsonData[this.state.currentPosition].btn2.avatar && (
                <i class="fas fa-ghost icon" />
              )}

              {jsonData[this.state.currentPosition].btn2.avatar && (
                <img src={jsonData[this.state.currentPosition].btn2.avatar} />
              )}
              <span>{jsonData[this.state.currentPosition].btn2.text}</span>
            </button>
          </p>
          <p className="score">Score : {this.state.totalScore}</p>
        </div>
      );
    }
  }
}
