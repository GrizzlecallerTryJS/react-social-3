import React from "react";
import DialogsComponent from "./Dialogs/DialogsComponent";
import style from "./Messages.module.css";

const Messages = (props) => {
  return (
    <div className={style.main}>
      <DialogsComponent
        message={props.message}
        users={props.users}
        addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default Messages;
