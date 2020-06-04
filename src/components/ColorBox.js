import React, { Component } from "react";

import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    return (
      <div className="ColorBox" style={{ backgroundColor: this.props.color }}>
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}
