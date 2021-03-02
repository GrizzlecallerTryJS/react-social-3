import React from "react";

const SendMessageComponent = (props) => {
  let sendMessageButtonAction = () => {
    props.dispatch(props.sendMessageAC());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(props.onMessageChangeAC(text));
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onMessageChange}
          value={props.newMessageText}
        ></textarea>
      </div>
      <div>
        <button onClick={sendMessageButtonAction}>Send Message</button>
      </div>
    </div>
  );
};

export default SendMessageComponent;
