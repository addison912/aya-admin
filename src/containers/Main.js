import React, { Component } from "react";
import LogoutButton from "../components/LogoutButton";

class Home extends Component {
  render() {
    return (
      <div className="landingContainer">
        <h1>Aya Admin Panel</h1>
        <LogoutButton />
      </div>
    );
  }
}

export default Home;
