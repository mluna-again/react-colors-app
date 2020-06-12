import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";

import useStyles from "./NewPaletteFormStyles";
import NewPalettePopup from "./NewPalettePopup";
import NewPaletteEmojiPicker from "./NewPaletteEmojiPicker";
import "./NewPaletteNav.css";

export default function NewPaletteNav(props) {
  const {
    isDrawerOpen,
    handleDrawerOpen,
    handleSavePalette,
    paletteName,
    handlePaletteNameChange,
    colors,
    itExists,
    setEmoji,
  } = props;

  useEffect(() => {
    const toId = (stringName) => stringName.toLowerCase().replace(/ /g, "-");

    ValidatorForm.addValidationRule("isUnique", (value) => {
      const isUnique = colors.find(
        (color) => color.name.toLowerCase() === value.toLowerCase()
      );
      if (!isUnique) return true;
      return false;
    });

    ValidatorForm.addValidationRule("isUniqueName", (value) => {
      if (itExists(toId(value))) return false;
      return true;
    });
  });

  const classes = useStyles();

  const preSavePalette = () => {
    setPopupOpen(true);
  };

  const [popupOpen, setPopupOpen] = useState(false);

  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

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
        <NewPalettePopup
          popupOpen={popupOpen}
          setPopupOpen={setPopupOpen}
          savePalette={handleSavePalette}
          handlePaletteNameChange={handlePaletteNameChange}
          paletteName={paletteName}
          openEmojiPicker={setEmojiPickerOpen}
        />
        <NewPaletteEmojiPicker
          show={emojiPickerOpen}
          close={setEmojiPickerOpen}
          savePalette={handleSavePalette}
        />
        <Toolbar className="NewPaletteNav">
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
          <div className="NewPaletteNav-form">
            <Button
              variant="contained"
              color="primary"
              onClick={preSavePalette}
            >
              Save
            </Button>
            <Link to="/">
              <Button variant="contained" color="secondary">
                Go back
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
