const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const initState = {
  users: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Yana" },
    { id: 3, name: "Marina" },
    { id: 4, name: "Sasha" },
  ],
  messages: [
    { id: 1, message: "Lorem ipsum dolor sit amet, consectetur." },
    { id: 2, message: "Lorem ipsum dolor amet, consectetur adipisicing." },
    { id: 3, message: "Lorem ipsum dolor sit." },
    { id: 4, message: "Lorem ipsum dolor sit amet." },
  ],
  newMessageText: "blablabla",
};

const messagePageReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _addMessage = (message) => {
    let newMessage = {
      id: stateCopy.messages.length + 1,
      message: message,
    };

    stateCopy.messages = [...state.messages, newMessage];

    _zeroingMessage();
  };

  let _updateNewMessageText = (text) => {
    stateCopy.newMessageText = text;
  };

  let _zeroingMessage = () => {
    stateCopy.newMessageText = "";
  };

  if (action.type === ADD_MESSAGE) {
    _addMessage(action.message);
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    _updateNewMessageText(action.text);
  }

  return stateCopy;
};

export const sendMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message.sendMessageForm,
  };
};

export const onMessageChange = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text,
  };
};

export default messagePageReducer;
