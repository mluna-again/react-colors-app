import React, { Component } from "react";

import ColorBox from "./ColorBox";
import "./Palette.css";
import NavBar from "./NavBar";

export default class Palette extends Component {
  state = {
    level: 500,
    format: "hex",
  };

  handleChangeLevel = (level) => {
    this.setState({ level });
  };

  handleChangeFormat = (event) => {
    this.setState({ format: event.target.value });
  };

  render() {
    const { level, format } = this.state;
    const { handleChangeLevel, handleChangeFormat } = this;

    const colors = this.props.palette.colors[this.state.level];
    const colorBoxes = colors.map((color) => (
      <ColorBox color={color[format]} name={color.name} />
    ));

    return (
      <div className="Palette">
        <NavBar
          format={format}
          level={level}
          handleChangeLevel={handleChangeLevel}
          handleChangeFormat={handleChangeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}
