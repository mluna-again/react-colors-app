import React, { Component } from "react";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <span className="Footer-text">
          Palette: {this.props.palette} {this.props.emoji}
        </span>
        <span className="Footer-text">Made with ❤ in 2020</span>
      </footer>
    );
  }
}
