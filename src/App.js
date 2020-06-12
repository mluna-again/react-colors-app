import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

import "./App.css";

function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [palettes, setPalettes] = useState(savedPalettes || seedColors);

  const findPalette = (id) => {
    const palette = palettes.find((palette) => {
      return palette.id === id;
    });
    return palette;
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const itExists = (paletteId) => {
    return palettes.some((palette) => palette.id === paletteId);
  };

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  });

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <PaletteList {...props} palettes={palettes} />}
      />
      <Route
        exact
        path="/palette/new"
        render={(props) => (
          <NewPaletteForm
            itExists={itExists}
            savePalette={savePalette}
            {...props}
            defaultPalette={palettes[0]}
          />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(props) => {
          const palette = generatePalette(findPalette(props.match.params.id));
          return <Palette palette={palette} />;
        }}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(props) => {
          const palette = generatePalette(
            findPalette(props.match.params.paletteId)
          );
          return (
            <SingleColorPalette
              palette={palette}
              colorId={props.match.params.colorId}
            />
          );
        }}
      />
    </Switch>
  );
}

export default App;
