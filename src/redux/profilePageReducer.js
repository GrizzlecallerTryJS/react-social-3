import defaultImage from "../assets/images/defaultImage.png";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initState = {
  posts: [
    { id: 1, message: "BEEP", image: defaultImage },
    { id: 2, message: "BOOP", image: defaultImage },
  ],
  newPostText: "ddd5",
};

const profilePageReducer = (state = initState, action) => {
  debugger;
  let _addPost = () => {
    let newPost = {
      id: state.posts.length + 1,
      message: state.newPostText,
      image: defaultImage,
    };
    state.posts.push(newPost);
    _zeroingPost();
  };

  let _updateNewPostText = (text) => {
    state.newPostText = text;
  };

  let _zeroingPost = () => {
    state.newPostText = "";
  };

  if (action.type === ADD_POST) {
    _addPost();
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    _updateNewPostText(action.text);
  }

  return state;
};

export const addPostAC = () => {
  return {
    type: ADD_POST,
  };
};

export const onPostChangeAC = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text,
  };
};

export default profilePageReducer;
