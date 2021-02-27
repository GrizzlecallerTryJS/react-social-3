import React from "react";
import style from "./DialogsComponent.module.css";
import UsersComponent from "./UsersComponent/UsersComponent";
import MessagesComponent from "./MessagesComponent/MessagesComponent";

const DialogsComponent = () => {
  return (
    <div className={style.main}>
      <div className={style.name}>
        <UsersComponent />
      </div>
      <div className={style.message}>
        <MessagesComponent />
      </div>
    </div>
  );
};

export default DialogsComponent;
