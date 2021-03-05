import React from "react";
import style from "./Messages.module.css";
import DialogsComponentContainer from "./Dialogs/DialogsComponentContainer";

const Messages = (props) => {
  return (
    <div className={style.main}>
      <DialogsComponentContainer />
    </div>
  );
};

export default Messages;
