import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { setAuthLogout } from "../../redux/authReducer";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <div className={style.login}>
        {props.isAuth ? (
          <NavLink to={`/profile/${props.user.id}`}>
            {`${props.user.login}`}
            <span onClick={props.setAuthLogout}>(LogOut)</span>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
