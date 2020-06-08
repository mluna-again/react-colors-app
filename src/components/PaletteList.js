import React, { Component } from "react";

import MiniPalette from "./MiniPalette";

import "./PaletteList.css";

export default class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const palettes = this.props.palettes.map((palette) => {
      return (
        <div className="PaletteList-palette">
          <MiniPalette
            handleClick={this.goToPalette}
            key={palette.id}
            title={palette.paletteName}
            {...palette}
          />
        </div>
      );
    });
    return (
      <div className="PaletteList">
        <div className="PaletteList-header">
          <div>
            <h1 className="PaletteList-title">react colors</h1>
          </div>
          <button className="PaletteList-btn">Create palette</button>
        </div>
        <div className="PaletteList-palettes">{palettes}</div>
      </div>
    );
  }
}
