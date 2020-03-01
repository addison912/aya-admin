import React from "react";
import { createHistory, LocationProvider, Router } from "@reach/router";
import createHashSource from "hash-source";

// Components
import Home from "./containers/Home";

let source = createHashSource();
let history = createHistory(source);

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <LocationProvider history={history}>
          <div className="App" path="/">
            <Router>
              <Home path="/" />
            </Router>
          </div>
        </LocationProvider>
      </React.StrictMode>
    );
  }
}

export default App;
