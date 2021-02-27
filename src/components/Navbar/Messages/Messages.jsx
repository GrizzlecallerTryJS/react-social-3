import React from "react";
import DialogsComponent from "./Dialogs/DialogsComponent";
import style from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={style.main}>
      <DialogsComponent message={props.message} users={props.users} />
    </div>
  );
};

export default Messages;
