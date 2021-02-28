import React from "react";

const SendMessageComponent = () => {
  let messageText = React.createRef();

  let sendMessageButtonAction = () => {
    let text = messageText.current.value;
    alert(text);
  };

  return (
    <div>
      <div>
        <textarea ref={messageText}></textarea>
      </div>
      <div>
        <button onClick={sendMessageButtonAction}>Send Message</button>
      </div>
    </div>
  );
};

export default SendMessageComponent;
