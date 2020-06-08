import React, { Component } from "react";
import MiniPalette from "./MiniPalette";

import "./PaletteList.css";

export default class PaletteList extends Component {
  render() {
    const palettes = this.props.palettes.map((palette) => {
      return <MiniPalette title={palette.paletteName} {...palette} />;
    });
    return (
      <div className="PaletteList">
        <div>
          <span role="img" aria-label="logo" className="PaletteList-logo">
            🌑
          </span>
          <h1 className="PaletteList-title">react colors</h1>
        </div>
        <div className="PaletteList-palettes">{palettes}</div>
      </div>
    );
  }
}
