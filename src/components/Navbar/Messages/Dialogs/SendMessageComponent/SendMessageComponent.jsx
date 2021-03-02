import React from "react";

const SendMessageComponent = (props) => {
  let textElement = React.createRef();

  let sendMessageButtonAction = () => {
    props.dispatch(props.sendMessageAC());
  };

  let onMessageChange = () => {
    let text = textElement.current.value;
    props.dispatch(props.onMessageChangeAC(text));
  };

  return (
    <div>
      <div>
        <textarea
          ref={textElement}
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
