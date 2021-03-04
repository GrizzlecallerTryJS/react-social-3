import React from "react";

const SendMessageComponent = (props) => {
  let sendMessageButtonAction = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
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
