import React from "react";
import { createHistory, LocationProvider, Router } from "@reach/router";
import createHashSource from "hash-source";
import userContext from "./userContext";
import PrivateRoute from "./components/PrivateRoute";
import { domain } from "../config/constants";

// Components
import Main from "./containers/Main";

let source = createHashSource();
let history = createHistory(source);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      token: window.sessionStorage.ayaToken || null,
      user: false,
      password: "",
      login: this.login,
      logout: this.logout,
      toState: this.toState,
      tokenCheck: this.tokenCheck
    };
  }

  login = e => {
    e.preventDefault;
    console.log(`logging in ${this.state.email}...`);
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    }
    postData(`${domain}/api/user/login`, {
      data: btoa(
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
    }).then(data => {
      console.log(data);
      if (data.signedJwt) {
        sessionStorage.setItem("ayaToken", data.signedJwt);
        this.setState({ token: data.signedJwt });
      }
    });
  };

  logout = () => {
    console.log("logging out ...");
    sessionStorage.removeItem("ayaToken");
    this.setState({ token: null });
  };
  toState = input => {
    this.setState(input);
  };

  tokenCheck = () => {
    if (window.sessionStorage.ayaToken) {
      this.setState({ token: window.sessionStorage.ayaToken });
    } else {
      this.setState({ token: null });
    }
  };

  render() {
    return (
      <React.StrictMode>
        <LocationProvider history={history}>
          <userContext.Provider value={this.state}>
            <Router>
              <PrivateRoute as={Main} path="/" />
            </Router>
          </userContext.Provider>
        </LocationProvider>
      </React.StrictMode>
    );
  }
}

export default App;
