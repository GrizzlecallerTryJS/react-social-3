import React from "react";
import DialogsComponent from "./DialogsComponent";
import {
  onMessageChangeAC,
  sendMessageAC,
} from "../../../../redux/messagePageReducer";
import ContextProvider from "../../../../ContextProvider";

const DialogsComponentContainer = () => {
  return (
    <ContextProvider.Consumer value>
      {(state) => {
        debugger;
        let store = state.getState().messagePageReducer;

        let sendMessage = () => {
          state.dispatch(sendMessageAC());
        };

        let onMessageChange = (text) => {
          state.dispatch(onMessageChangeAC(text));
        };

        return (
          <DialogsComponent
            state={store}
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
          />
        );
      }}
    </ContextProvider.Consumer>
  );
};

export default DialogsComponentContainer;
