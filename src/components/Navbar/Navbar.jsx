import React from "react";
import style from "./Navbar.module.css";
import MessagesComponent from "./Messages/MessagesComponent";
import Profile from "../Profile/Profile";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.items}>
        <div>Profile</div>
        <div>
          <MessagesComponent />
        </div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </div>
    </nav>
  );
};

export default Navbar;
