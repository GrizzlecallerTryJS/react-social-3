import React from "react";
import DialogsComponent from "./DialogsComponent";
import {
  onMessageChangeAC,
  sendMessageAC,
} from "../../../../redux/messagePageReducer";

const DialogsComponentContainer = (props) => {
  let store = props.state.getState().messagePageReducer;

  let sendMessage = () => {
    props.state.dispatch(sendMessageAC());
  };

  let onMessageChange = (text) => {
    props.state.dispatch(onMessageChangeAC(text));
  };

  return (
    <DialogsComponent
      state={store}
      sendMessage={sendMessage}
      onMessageChange={onMessageChange}
    />
  );
};

export default DialogsComponentContainer;
