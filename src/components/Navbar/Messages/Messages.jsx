import React from "react";
import DialogsComponent from "./Dialogs/DialogsComponent";
import style from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={style.main}>
      <DialogsComponent
        message={props.message}
        users={props.users}
        dispatch={props.dispatch}
        sendMessageAC={props.sendMessageAC}
        onMessageChangeAC={props.onMessageChangeAC}
      />
    </div>
  );
};

export default Messages;
