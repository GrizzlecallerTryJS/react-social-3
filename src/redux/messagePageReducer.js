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
    {
      id: 2,
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    { id: 3, message: "Lorem ipsum dolor sit." },
    { id: 4, message: "Lorem ipsum dolor sit amet." },
  ],
  newMessageText: "blablabla",
};

const messagePageReducer = (state = initState, action) => {
  let _addMessage = () => {
    let newMessage = {
      id: state.messages.length + 1,
      message: state.newMessageText,
    };
    state.messages.push(newMessage);
    _zeroingMessage();
  };

  let _updateNewMessageText = (text) => {
    state.newMessageText = text;
  };

  let _zeroingMessage = () => {
    state.newMessageText = "";
  };

  if (action.type === ADD_MESSAGE) {
    _addMessage();
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    _updateNewMessageText(action.text);
  }

  return state;
};

export const sendMessageAC = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const onMessageChangeAC = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text,
  };
};

export default messagePageReducer;
