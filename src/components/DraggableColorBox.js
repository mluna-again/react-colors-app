import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { SortableElement } from "react-sortable-hoc";

import "./DraggableColorBox.css";

function DraggableColorBox(props) {
  const handleRemoveColor = (event) => {
    props.deleteColor(props.color.name);
  };

  return (
    <div
      className="DraggableColorBox"
      style={{ backgroundColor: props.color.color }}
    >
      <div className="DraggableColorBox-content">
        <span>{props.color.name}</span>
        <IconButton
          onClick={handleRemoveColor}
          className="DraggableColorBox-icon"
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SortableElement(DraggableColorBox);
