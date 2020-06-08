import React, { Component } from "react";

import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Palette.css";

export default class Palette extends Component {
  state = {
    level: 500,
    format: "hex",
  };

  handleChangeLevel = (level) => {
    this.setState({ level });
  };

  handleChangeFormat = (value) => {
    this.setState({ format: value });
  };

  render() {
    const { level, format } = this.state;
    const { handleChangeLevel, handleChangeFormat } = this;

    const colors = this.props.palette.colors[this.state.level];
    const colorBoxes = colors.map((color) => (
      <ColorBox color={color[format]} name={color.name} key={color.id} />
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
        <Footer
          palette={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}
