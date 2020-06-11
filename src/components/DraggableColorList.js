import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

function DraggableColorList({ colors, deleteColor }) {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, index) => (
        <DraggableColorBox
          index={index}
          color={color}
          deleteColor={deleteColor}
          key={color.name}
        />
      ))}
    </div>
  );
}

export default SortableContainer(DraggableColorList);
