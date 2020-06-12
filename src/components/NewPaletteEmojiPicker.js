import React from "react";
import Dialog from "@material-ui/core/Dialog";
import "emoji-mart/css/emoji-mart.css";
import data from "emoji-mart/data/apple.json";
import { NimblePicker } from "emoji-mart";

export default function NewPaletteEmojiPicker(props) {
  const { show, savePalette, close } = props;

  const handleClose = () => {
    close(false);
  };

  const handleSelect = (emoji) => {
    savePalette(emoji.native);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={show}
    >
      <NimblePicker set="apple" data={data} onSelect={handleSelect} />
    </Dialog>
  );
}
