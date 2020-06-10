import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from "@material-ui/core/Snackbar";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";

import "rc-slider/assets/index.css";
import "./NavBar.css";

export default class NavBar extends Component {
  state = {
    showSnackBar: false,
  };

  changeFormat = (event) => {
    this.setState((state) => {
      this.props.handleChangeFormat(event.target.value);
      return {
        showSnackBar: true,
      };
    });
  };

  handleClose = () => {
    this.setState({ showSnackBar: false });
  };

  render() {
    const { level, handleChangeLevel, format, showSlider } = this.props;
    const { showSnackBar } = this.state;
    return (
      <header className="NavBar">
        <div className="NavBar-logo NavBar-item">
          <Link to="/">
            <span className="NavBar-logo-text">←</span>
            <span role="img" aria-label="logo">
              🌑
            </span>
            <span className="NavBar-logo-text">react colors</span>
          </Link>
        </div>
        {showSlider ? (
          <div className="NavBar-slider NavBar-item">
            <span>Level: {level}</span>
            <div>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={handleChangeLevel}
              />
            </div>
          </div>
        ) : null}
        <div className="NavBar-select NavBar-item">
          <FormControl>
            <InputLabel id="encoding">Encoding</InputLabel>
            <Select
              labelId="encoding"
              id="demo-simple-select"
              value={format}
              onChange={this.changeFormat}
            >
              <MenuItem value="hex">HEX #fffff</MenuItem>
              <MenuItem value="rgb">RGB (255, 255, 255)</MenuItem>
              <MenuItem value="rgba">RGBA (255, 255, 255, 1.0)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={showSnackBar}
            autoHideDuration={6000}
            onClose={this.handleClose}
          >
            <div className="NavBar-alert">
              <span className="NavBar-alert-text">
                Changed to: {format.toUpperCase()}
              </span>
              <div className="NavBar-alert-x">
                <IconButton
                  onClick={this.handleClose}
                  color="inherit"
                  aria-label="cancel"
                >
                  <CancelIcon />
                </IconButton>
              </div>
            </div>
          </Snackbar>
        </div>
      </header>
    );
  }
}
