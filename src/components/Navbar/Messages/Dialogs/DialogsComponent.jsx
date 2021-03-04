import React from "react";
import style from "./DialogsComponent.module.css";
import UsersComponent from "./UsersComponent/UsersComponent";
import MessagesComponent from "./MessagesComponent/MessagesComponent";
import SendMessageComponent from "./SendMessageComponent/SendMessageComponent";

//TODO: -сделать отображение аватарки для юзера

const DialogsComponent = (props) => {
  debugger;
  return (
    <div className={style.main}>
      <div className={style.name}>
        <UsersComponent users={props.state.users} />
      </div>
      <div className={style.message}>
        <MessagesComponent message={props.state.messages} />
      </div>
      <div className={style.addMessage}>
        <SendMessageComponent
          newMessageText={props.state.newMessageText}
          sendMessage={props.sendMessage}
          onMessageChange={props.onMessageChange}
        />
      </div>
    </div>
  );
};

export default DialogsComponent;
