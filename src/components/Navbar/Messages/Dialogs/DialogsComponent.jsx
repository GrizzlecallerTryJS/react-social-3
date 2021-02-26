import React from "react";
import style from "./DialogsComponent.module.css";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

const DialogsComponent = () => {
  return (
    <div className={style.main}>
      <div className={style.name}>
        <Users />
      </div>
      <div className={style.message}>
        <Messages />
      </div>
    </div>
  );
};

export default DialogsComponent;
