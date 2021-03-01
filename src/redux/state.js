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
    },

    profilePage: {
      posts: [
        { id: 1, message: "BEEP", image: defaultImage },
        { id: 2, message: "BOOP", image: defaultImage },
      ],
      newPostText: "ddd5",
    },
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
    store.zeroingMessage();
    store._rerenderTree(store._state);
  },

  updateNewPostText(text) {
    store._state.profilePage.newPostText = text;

    store._rerenderTree(store._state);
  },

  zeroingMessage() {
    store._state.profilePage.newPostText = "";
  },

  subscribe(observer) {
    store._rerenderTree = observer;
  },
};

window.state = store._state;

export default store;
