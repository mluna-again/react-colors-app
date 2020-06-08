import React from "react";
import { Link } from "react-router-dom";

import "./MiniPalette.css";

export default function MiniPalette(props) {
  const colors = props.colors.map(({ color }) => {
    return (
      <div
        className="MiniPalette-color"
        style={{ backgroundColor: color }}
      ></div>
    );
  });

  return (
    <div className="MiniPalette">
      <Link to={`/palette/${props.id}`}>
        <div className="MiniPalette-colors">{colors}</div>
        <div className="MiniPalette-info">
          {props.paletteName} {props.emoji}
        </div>
      </Link>
    </div>
  );
}
