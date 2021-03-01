import defaultImage from "../assets/images/defaultImage.png";

let store = {
  _rerenderTree() {},

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

  _rerender() {
    store._rerenderTree(store._state);
  },

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      id: store._state.profilePage.posts.length + 1,
      message: store._state.profilePage.newPostText,
      image: defaultImage,
    };
    store._state.profilePage.posts.push(newPost);
    store.zeroingPost();
    store._rerender();
  },

  addMessage() {
    let newMessage = {
      id: store._state.messagesPage.messages.length + 1,
      message: store._state.messagesPage.newMessageText,
    };
    store._state.messagesPage.messages.push(newMessage);
    store.zeroingMessage();
    store._rerender();
  },

  updateNewMessageText(text) {
    store._state.messagesPage.newMessageText = text;
    store._rerender();
  },

  updateNewPostText(text) {
    store._state.profilePage.newPostText = text;

    store._rerender();
  },

  zeroingPost() {
    store._state.profilePage.newPostText = "";
  },

  zeroingMessage() {
    store._state.messagesPage.newMessageText = "";
  },

  subscribe(observer) {
    store._rerenderTree = observer;
  },
};

window.state = store._state;

export default store;
