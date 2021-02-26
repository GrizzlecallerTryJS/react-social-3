import React from "react";
import DialogsComponent from "./Dialogs/DialogsComponent";
import style from "./MessagesComponent.module.css";

const MessagesComponent = () => {
  return (
    <div className={style.main}>
      <DialogsComponent />
    </div>
  );
};

export default MessagesComponent;
