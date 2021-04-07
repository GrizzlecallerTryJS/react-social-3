import React from "react";
import style from "./LoginComponent.module.css";
import LoginForm from "./LoginForm/LoginForm";

const LoginComponent = (props) => {
  return (
    <div className={style.main}>
      <div>
        <h1>Login Form</h1>
      </div>
      <LoginForm setAuthLogin={props.setAuthLogin} error={props.error} />
    </div>
  );
};

export default LoginComponent;
