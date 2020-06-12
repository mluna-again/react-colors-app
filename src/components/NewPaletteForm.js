import React, { useState } from "react";
import clsx from "clsx";
import { arrayMove } from "react-sortable-hoc";

import DraggableColorList from "./DraggableColorList";
import NewPaletteNav from "./NewPaletteNav";
import NewPaletteDrawer from "./NewPaletteDrawer";
import useStyles from "./NewPaletteFormStyles";
import "./NewPaletteForm.css";

export default function NewPaletteForm(props) {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const [color, setColor] = useState("#fffff");
  const handleChangeColor = (color) => {
    setColor(color.hex);
  };
  const [colors, setColors] = useState(props.defaultPalette.colors);
  const handleAddColor = () => {
    const newColor = {
      color,
      name: newName,
    };
    setColors([...colors, newColor]);
    setNewName("");
  };

  const [newName, setNewName] = useState("");
  const handleNameChange = (event) => setNewName(event.target.value);

  const [paletteName, setPaletteName] = useState("");
  const handlePaletteNameChange = (event) => setPaletteName(event.target.value);

  const savePalette = (emoji) => {
    const toId = (stringName) => stringName.toLowerCase().replace(/ /g, "-");
    const newPalette = {
      paletteName,
      colors,
      id: toId(paletteName),
      emoji,
    };
    props.savePalette(newPalette);
    props.history.push("/");
  };

  const deleteColor = (colorName) => {
    const newColors = colors.filter((color) => color.name !== colorName);
    setColors(newColors);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${color}`);
  };
  const clearPalette = () => setColors([]);

  const isPaletteFull = colors.length >= 20;

  return (
    <div className={classes.root}>
      <NewPaletteNav
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleSavePalette={savePalette}
        paletteName={paletteName}
        handlePaletteNameChange={handlePaletteNameChange}
        colors={colors}
        itExists={props.itExists}
      />
      <NewPaletteDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        isPaletteFull={isPaletteFull}
        randomColor={randomColor}
        color={color}
        handleChangeColor={handleChangeColor}
        handleAddColor={handleAddColor}
        colorName={newName}
        handleNameChange={handleNameChange}
        handleClearPalette={clearPalette}
      />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawerOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          className="NewPaletteForm-box"
          deleteColor={deleteColor}
          colors={colors}
          axis={"xy"}
          onSortEnd={onSortEnd}
          distance={2}
        />
      </main>
    </div>
  );
}
