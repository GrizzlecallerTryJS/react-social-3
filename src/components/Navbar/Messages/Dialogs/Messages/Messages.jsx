import React from "react";
import style from "./Message.module.css";

const Messages = () => {
  return (
    <div className={style.message}>
      <div>Lorem ipsum dolor sit amet, consectetur.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div>Lorem ipsum dolor sit.</div>
      <div>Lorem ipsum dolor sit amet.</div>
    </div>
  );
};

export default Messages;
