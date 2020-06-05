import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Palette extends Component {
  state = {
    level: 300,
  };

  handleChange = (level) => {
    this.setState({ level });
  };

  render() {
    const colors = this.props.palette.colors[this.state.level];
    const colorBoxes = colors.map((color) => (
      <ColorBox color={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.handleChange}
        />
        {/* Navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}
