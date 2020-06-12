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

export default function NewPaletteDrawer(props) {
  const {
    isDrawerOpen,
    handleDrawerClose,
    isPaletteFull,
    randomColor,
    color,
    handleChangeColor,
    handleAddColor,
    paletteName,
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
          <Typography variant="h4">Design your palette</Typography>
          <Button variant="contained" color="secondary" onClick={clearPalette}>
            Clear
          </Button>
          <Button
            disabled={isPaletteFull}
            variant="contained"
            color={isPaletteFull ? "default" : "primary"}
            onClick={randomColor}
          >
            Random color
          </Button>
          <ChromePicker color={color} onChange={handleChangeColor} />
          <ValidatorForm onSubmit={handleAddColor}>
            <TextValidator
              value={paletteName}
              onChange={handleNameChange}
              validators={["required", "isUnique"]}
              errorMessages={["A name is required", "Name should be unique"]}
            />
            <Button
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
      </Drawer>
    </div>
  );
}
