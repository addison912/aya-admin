import React, { Component } from "react";
import LogoutButton from "../components/LogoutButton";
import LeftNav from "../components/LeftNav";
import Logo from "../components/Logo";

class Home extends Component {
  render() {
    return (
      <div id="App">
        <Logo />
        <LogoutButton />
        <LeftNav />
        <div className="main">
          <div className="content">
            <h1>Aya Admin Panel</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
