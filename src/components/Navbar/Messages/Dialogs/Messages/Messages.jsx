import React from "react";
import style from "./Message.module.css";

let message = [
  { id: 1, message: "Lorem ipsum dolor sit amet, consectetur." },
  {
    id: 2,
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  { id: 3, message: "Lorem ipsum dolor sit." },
  { id: 4, message: "Lorem ipsum dolor sit amet." },
];

const Messages = () => {
  return message.map((m) => {
    return <Item message={m.message} key={m.id} />;
  });
};

let Item = (props) => {
  return <div>{props.message}</div>;
};

export default Messages;
