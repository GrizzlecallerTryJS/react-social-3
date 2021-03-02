import defaultImage from "../assets/images/defaultImage.png";

let store = {
  _callSubscriber() {},

  _rerender() {
    this._callSubscriber(this._state);
  },

  _state: {
    messagesPage: {
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
    },

    profilePage: {
      posts: [
        { id: 1, message: "BEEP", image: defaultImage },
        { id: 2, message: "BOOP", image: defaultImage },
      ],
      newPostText: "ddd5",
    },
  },

  _zeroingPost() {
    this._state.profilePage.newPostText = "";
  },

  _zeroingMessage() {
    this._state.messagesPage.newMessageText = "";
  },

  getState() {
    return this._state;
  },

  _addPost() {
    let newPost = {
      id: store._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      image: defaultImage,
    };
    this._state.profilePage.posts.push(newPost);
    this._zeroingPost();
    this._rerender();
  },

  _addMessage() {
    let newMessage = {
      id: this._state.messagesPage.messages.length + 1,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._zeroingMessage();
    this._rerender();
  },

  _updateNewMessageText(text) {
    this._state.messagesPage.newMessageText = text;
    this._rerender();
  },

  _updateNewPostText(text) {
    this._state.profilePage.newPostText = text;

    this._rerender();
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD_MESSAGE") {
      this._addMessage();
    } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
      this._updateNewMessageText(action.text);
    } else if (action.type === "ADD_POST") {
      this._addPost();
    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._updateNewPostText(action.text);
    }
  },
};

window.state = store._state;

export default store;
