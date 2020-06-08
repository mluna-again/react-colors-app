import React from "react";

import "./MiniPalette.css";

export default function MiniPalette(props) {
  const colors = props.colors.map(({ color, name }) => {
    return (
      <div
        className="MiniPalette-color"
        style={{ backgroundColor: color }}
        key={name}
      ></div>
    );
  });

  return (
    <div className="MiniPalette" onClick={() => props.handleClick(props.id)}>
      <div className="MiniPalette-colors">{colors}</div>
      <div className="MiniPalette-info">
        {props.paletteName} {props.emoji}
      </div>
    </div>
  );
}
