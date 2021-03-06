import defaultImage from "../assets/images/defaultImage.png";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";

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

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.messagesPage = messagePageReducer(
      this._state.messagesPage,
      action
    );

    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );

    this._rerender();
  },
};

window.state = store._state;

export default store;
