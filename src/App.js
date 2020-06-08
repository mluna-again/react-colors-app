import React from "react";
import { Route, Switch } from "react-router-dom";

import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  const findPalette = (id) => {
    const palette = seedColors.find((palette) => {
      return palette.id === id;
    });
    return palette;
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedColors} />}
      />
      <Route
        exact
        path="/palette/:id"
        render={(props) => {
          const palette = generatePalette(findPalette(props.match.params.id));
          return <Palette palette={palette} />;
        }}
      />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[5])} />
    // </div>
  );
}

export default App;
