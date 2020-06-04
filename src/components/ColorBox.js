import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";

export default class ColorBox extends Component {
  state = {
    isCopied: false,
  };

  handleCopy = () => {
    this.setState({ isCopied: true }, () => {
      setTimeout(() => this.setState({ isCopied: false }), 1500);
    });
  };

  render() {
    const { name, color } = this.props;
    const overlayClasses = `ColorBox-copy-overlay ${
      this.state.isCopied ? "active-overlay" : ""
    }`;
    const messageClasses = `ColorBox-copy-message ${
      this.state.isCopied ? "active-message" : ""
    }`;

    return (
      <CopyToClipboard text={color} onCopy={this.handleCopy}>
        <div className="ColorBox" style={{ backgroundColor: color }}>
          {/* Overlay starts here... */}
          <div style={{ backgroundColor: color }} className={overlayClasses} />
          <div className={messageClasses}>
            <h1>Copied!</h1>
            <p>{color}</p>
          </div>
          {/* Overlay ends here. */}

          <div className="ColorBox-copy-container">
            <div className="ColorBox-content">
              <span>{name}</span>
            </div>
            <button className="ColorBox-copy-btn">Copy</button>
          </div>

          <span className="ColorBox-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
