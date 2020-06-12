import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function NewPalettePopup(props) {
  const {
    popupOpen,
    setPopupOpen,
    paletteName,
    handlePaletteNameChange,
    openEmojiPicker,
  } = props;

  const handleClose = () => {
    setPopupOpen(false);
  };

  const handleSubmit = () => {
    openEmojiPicker(true);
  };

  return (
    <div>
      <Dialog
        open={popupOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Insert palette name</DialogTitle>
        <DialogContent>
          <ValidatorForm onSubmit={handleSubmit}>
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
            <Button variant="contained" color="primary">
              Save
            </Button>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
