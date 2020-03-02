import React from "react";
import UserContext from "../userContext";

class Login extends React.Component {
  static contextType = UserContext;

  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div className="loginContainer">
            <h2>Login</h2>
            <div className="loginForm">
              <input
                type="email"
                id="loginEmail"
                name="email"
                onChange={e => context.toState({ email: e.target.value })}
                value={context.email}
              />
              <input
                type="password"
                id="loginPassword"
                name="password"
                onChange={e => context.toState({ password: e.target.value })}
                value={context.password}
              />
              <input type="submit" value="Submit" onClick={context.login} />
            </div>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Login;
