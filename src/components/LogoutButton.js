import React from "react";
import UserContext from "../userContext";

class Logout extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div className="logoutContainer">
            <input type="submit" value="Logout" onClick={context.logout} />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Logout;
