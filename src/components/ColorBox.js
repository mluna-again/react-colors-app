import React, { Component } from "react";

import "./ColorBox.css";

export default class ColorBox extends Component {
  render() {
    const { name, color } = this.props;

    return (
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div className="ColorBox-copy-container">
          <div className="ColorBox-content">
            <span>{name}</span>
          </div>
          <button className="ColorBox-copy-btn">Copy</button>
        </div>
        <span className="ColorBox-more">More</span>
      </div>
    );
  }
}
