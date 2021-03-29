import React from "react";
import LoginComponent from "./LoginComponent";

class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginComponent {...this.props} />
      </div>
    );
  }
}

export default Login;
