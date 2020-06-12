import React, { Component } from "react";
import { Link } from "react-router-dom";

import MiniPalette from "./MiniPalette";

import "./PaletteList.css";

export default class PaletteList extends Component {
  goToPalette = (id) => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const palettes = this.props.palettes.map((palette) => {
      return (
        <div className="PaletteList-palette" key={palette.id}>
          <MiniPalette
            handleClick={this.goToPalette}
            title={palette.paletteName}
            {...palette}
          />
        </div>
      );
    });
    return (
      <div className="PaletteList">
        <nav className="PaletteList-header">
          <div>
            <h1 className="PaletteList-title">react colors</h1>
          </div>
          <Link to="/palette/new" className="PaletteList-btn">
            Create palette
          </Link>
        </nav>
        <div className="PaletteList-palettes">{palettes}</div>
      </div>
    );
  }
}
