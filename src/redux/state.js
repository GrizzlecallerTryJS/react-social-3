import defaultImage from "../assets/images/defaultImage.png";
import render from "../render";

let state = {
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
    newPostText: "ddd",
  },
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    image: defaultImage,
  };
  state.profilePage.posts.push(newPost);
  zeroingMessage();
  render(state);
};

export let updateNewPostText = (text) => {
  state.profilePage.newPostText = text;

  render(state);
};

export let zeroingMessage = () => {
  state.profilePage.newPostText = "";
};

export default state;
