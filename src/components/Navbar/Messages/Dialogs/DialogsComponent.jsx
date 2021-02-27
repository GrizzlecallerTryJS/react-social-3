import React from "react";
import style from "./DialogsComponent.module.css";
import UsersComponent from "./UsersComponent/UsersComponent";
import MessagesComponent from "./MessagesComponent/MessagesComponent";

const DialogsComponent = (props) => {
  return (
    <div className={style.main}>
      <div className={style.name}>
        <UsersComponent users={props.users} />
      </div>
      <div className={style.message}>
        <MessagesComponent message={props.message} />
      </div>
    </div>
  );
};

export default DialogsComponent;
