import React from "react";

import "./DraggableColorBox.css";

export default function DraggableColorBox(props) {
  return (
    <div
      className="DraggableColorBox"
      style={{ backgroundColor: props.color.color }}
    >
      {props.color.name}
    </div>
  );
}
