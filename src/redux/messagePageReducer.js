const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const messagePageReducer = (state, action) => {
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

export default messagePageReducer;
