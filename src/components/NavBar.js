import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    const { level, handleChange } = this.props;
    return (
      <header className="NavBar">
        <div className="NavBar-logo">
          <span role="img" aria-label="logo">
            🌑
          </span>
          <span className="NavBar-logo-text">react colors</span>
        </div>
        <div className="NavBar-slider">
          <span>Level: {level}</span>
          <div>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={handleChange}
            />
          </div>
        </div>
      </header>
    );
  }
}
