import React from "react";
import style from "./DialogsComponent.module.css";
import UsersComponent from "./UsersComponent/UsersComponent";
import MessagesComponent from "./MessagesComponent/MessagesComponent";
import SendMessageForm from "./SendMessageComponent/SendMessageForm";

//TODO: -сделать отображение аватарки для юзера

const DialogsComponent = (props) => {
  return (
    <div className={style.main}>
      <div className={style.name}>
        <UsersComponent users={props.state.users} />
      </div>
      <div className={style.message}>
        <MessagesComponent message={props.state.messages} />
      </div>
      <div className={style.addMessage}>
        <SendMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};

export default DialogsComponent;
