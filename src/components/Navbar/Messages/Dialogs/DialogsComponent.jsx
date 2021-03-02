import React from "react";
import style from "./DialogsComponent.module.css";
import UsersComponent from "./UsersComponent/UsersComponent";
import MessagesComponent from "./MessagesComponent/MessagesComponent";
import SendMessageComponent from "./SendMessageComponent/SendMessageComponent";
import Messages from "../Messages";

//TODO: -сделать отображение аватарки для юзера

const DialogsComponent = (props) => {
  return (
    <div className={style.main}>
      <div className={style.name}>
        <UsersComponent users={props.users} />
      </div>
      <div className={style.message}>
        <MessagesComponent message={props.message.messages} />
      </div>
      <div className={style.addMessage}>
        <SendMessageComponent
          dispatch={props.dispatch}
          newMessageText={props.message.newMessageText}
          sendMessageAC={props.sendMessageAC}
          onMessageChangeAC={props.onMessageChangeAC}
        />
      </div>
    </div>
  );
};

export default DialogsComponent;
