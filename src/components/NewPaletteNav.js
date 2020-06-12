import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import useStyles from "./NewPaletteFormStyles";

export default function NewPaletteNav(props) {
  const classes = useStyles();
  const {
    isDrawerOpen,
    handleDrawerOpen,
    handleSavePalette,
    paletteName,
    handlePaletteNameChange,
  } = props;
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isDrawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, isDrawerOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create palette
          </Typography>
          <ValidatorForm onSubmit={handleSavePalette}>
            <TextValidator
              label="Palette name"
              value={paletteName}
              onChange={handlePaletteNameChange}
              validators={["required", "isUniqueName"]}
              errorMessages={[
                "Palettes need a name",
                "That palette already exists",
              ]}
            />
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  );
}
