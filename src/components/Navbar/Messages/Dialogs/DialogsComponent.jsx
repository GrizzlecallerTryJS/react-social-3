import React from "react";
import style from "./DialogsComponent.module.css";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

const DialogsComponent = () => {
  return (
    <div className={style.main}>
      <Users />
      <Messages />
    </div>
  );
};

export default DialogsComponent;
