import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
