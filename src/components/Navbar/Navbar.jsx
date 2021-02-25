import React from "react";
import style from "./Navbar.module.css";
import MessagesComponent from "./Messages/MessagesComponent";
import Profile from "../Profile/Profile";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.items}>
        <div>
          <a href="/profile">Profile</a>
        </div>
        <div>
          <a href="/messages">Messages</a>
        </div>
        <div>
          <a href="/news">News</a>
        </div>
        <div>
          <a href="/music">Music</a>
        </div>
        <div>
          <a href="/settings">Settings</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
