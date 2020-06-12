import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import useStyles from "./NewPaletteFormStyles";
import "./NewPaletteDrawer.css";

export default function NewPaletteDrawer(props) {
  const {
    isDrawerOpen,
    handleDrawerClose,
    isPaletteFull,
    randomColor,
    color,
    handleChangeColor,
    handleAddColor,
    colorName,
    handleNameChange,
    clearPalette,
  } = props;

  const classes = useStyles();

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={isDrawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className="NewPaletteForm-drawer-content">
          <div className="NewPaletteForm-drawer-heading">
            <Typography variant="h4">Design your palette</Typography>
            <div className="m-4">
              <Button
                className="m-4"
                variant="contained"
                color="secondary"
                onClick={clearPalette}
              >
                Clear
              </Button>
              <Button
                className="m-4"
                disabled={isPaletteFull}
                variant="contained"
                color={isPaletteFull ? "default" : "primary"}
                onClick={randomColor}
              >
                Random color
              </Button>
            </div>
          </div>
          <div className="NewPaletteForm-drawer-main">
            <ChromePicker color={color} onChange={handleChangeColor} />
            <ValidatorForm onSubmit={handleAddColor} className="mt-8">
              <TextValidator
                className="mw mb-8"
                value={colorName}
                onChange={handleNameChange}
                validators={["required", "isUnique"]}
                errorMessages={["A name is required", "Name should be unique"]}
              />
              <Button
                className="mw"
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: isPaletteFull ? "crimson" : color,
                  color: isPaletteFull ? "aliceblue" : "black",
                }}
                disabled={isPaletteFull}
              >
                {isPaletteFull ? "Palette full" : "Add color"}
              </Button>
            </ValidatorForm>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
