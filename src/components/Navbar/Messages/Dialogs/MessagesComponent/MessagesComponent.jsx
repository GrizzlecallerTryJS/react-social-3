import React from "react";
import MessageItemComponent from "./MessageItemComponent/MessageItemComponent";

const MessagesComponent = (props) => {
  return props.message.map((m) => {
    return <MessageItemComponent message={m.message} key={m.id} />;
  });
};

export default MessagesComponent;
