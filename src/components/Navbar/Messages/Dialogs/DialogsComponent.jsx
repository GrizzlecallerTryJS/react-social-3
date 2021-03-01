import React from "react";
import style from "./DialogsComponent.module.css";
import UsersComponent from "./UsersComponent/UsersComponent";
import MessagesComponent from "./MessagesComponent/MessagesComponent";
import SendMessageComponent from "./SendMessageComponent/SendMessageComponent";

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
          addMessage={props.addMessage}
          updateNewMessageText={props.updateNewMessageText}
          newMessageText={props.message.newMessageText}
        />
      </div>
    </div>
  );
};

export default DialogsComponent;
