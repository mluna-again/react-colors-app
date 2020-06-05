import React, { Component } from "react";
import Slider from "rc-slider";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

import "rc-slider/assets/index.css";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    const { level, handleChangeLevel, format, handleChangeFormat } = this.props;
    return (
      <header className="NavBar">
        <div className="NavBar-logo NavBar-item">
          <span className="NavBar-logo-text">←</span>
          <span role="img" aria-label="logo">
            🌑
          </span>
          <span className="NavBar-logo-text">react colors</span>
        </div>
        <div className="NavBar-slider NavBar-item">
          <span>Level: {level}</span>
          <div>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={handleChangeLevel}
            />
          </div>
        </div>
        <div className="NavBar-select NavBar-item">
          <FormControl>
            <InputLabel id="encoding">Encoding</InputLabel>
            <Select
              labelId="encoding"
              id="demo-simple-select"
              value={format}
              onChange={handleChangeFormat}
            >
              <MenuItem value="hex">HEX #fffff</MenuItem>
              <MenuItem value="rgb">RGB (255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA (255, 255, 255, 1.0)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </header>
    );
  }
}
