import React from "react";
/*import style from "./MessageComponent.module.css";*/
import MessageList from "./MessageList/MessageList";
import MessageItemComponent from "./MessageItemComponent/MessageItemComponent";

const MessagesComponent = () => {
  return MessageList.map((m) => {
    return <MessageItemComponent message={m.message} key={m.id} />;
  });
};

export default MessagesComponent;
