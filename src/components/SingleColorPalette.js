import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./SingleColorPalette.css";

export default class SingleColorPalette extends Component {
  _shades = this.gatherShades(this.props.palette, this.props.colorId);

  state = {
    format: "hex",
  };

  handleChangeFormat = (value) => {
    this.setState({ format: value });
  };

  gatherShades({ colors }, colorId) {
    let shades = [];
    for (const shade in colors) {
      shades = shades.concat(
        colors[shade].filter((color) => color.id === colorId)
      );
    }
    return shades.slice(1);
  }

  render() {
    const colorBoxes = this._shades.map((shade) => {
      return (
        <ColorBox
          color={shade[this.state.format]}
          name={shade.name}
          key={shade.name}
          showLink={false}
          height="50%"
        />
      );
    });

    return (
      <div className="SingleColorPalette">
        <NavBar
          showSlider={false}
          format={this.state.format}
          handleChangeFormat={this.handleChangeFormat}
        />
        <div className="SingleColorPalette-boxes">
          {colorBoxes}
          <div className="SingleColorPalette-go-back">
            <Link
              to={`/palette/${this.props.palette.id}`}
              className="SingleColorPalette-go-back-btn"
            >
              Go back
            </Link>
          </div>
        </div>
        <Footer
          palette={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}
