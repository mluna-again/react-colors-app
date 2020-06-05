import React, { Component } from "react";

import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar";

export default class Palette extends Component {
  state = {
    level: 500,
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
        <NavBar level={this.state.level} handleChange={this.handleChange} />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}
