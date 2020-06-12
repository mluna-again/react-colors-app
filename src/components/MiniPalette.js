import React, { useState } from "react";
import Delete from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./MiniPalette.css";

export default function MiniPalette(props) {
  const { deletePalette } = props;

  const colors = props.colors.map(({ color, name }) => {
    return (
      <div
        className="MiniPalette-color"
        style={{ backgroundColor: color }}
        key={name}
      ></div>
    );
  });

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    deletePalette(props.id);
  };

  const [popupOpen, setPopupOpen] = useState(false);
  const closePopup = (event) => {
    event.stopPropagation();

    setPopupOpen(false);
  };
  const openPopup = (event) => {
    event.stopPropagation();

    setPopupOpen(true);
  };

  return (
    <div className="MiniPalette" onClick={() => props.handleClick(props.id)}>
      <Dialog
        open={popupOpen}
        onClose={closePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup} variant="contained" color="primary">
            I changed my mind
          </Button>
          <Button
            onClick={handleDeleteClick}
            variant="contained"
            color="secondary"
          >
            Do it
          </Button>
        </DialogActions>
      </Dialog>
      <div className="MiniPalette-delete-icon" onClick={openPopup}>
        <Delete />
      </div>
      <div className="MiniPalette-colors">{colors}</div>
      <div className="MiniPalette-info">
        {props.paletteName} {props.emoji}
      </div>
    </div>
  );
}
