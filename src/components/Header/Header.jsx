import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const logOut = () => props.setAuthLogout(!props.isAuth);
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <div className={style.login}>
        {props.isAuth ? (
          <NavLink to={`/profile/${props.user.id}`}>
            <div>
              {`${props.user.login}`} -
              <button onClick={logOut}>(LogOut)</button>
            </div>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
