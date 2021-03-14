import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <div className={style.login}>
        {props.isAuth ? (
          <NavLink to={`/profile/${props.user.id}`}>{props.user.login}</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
