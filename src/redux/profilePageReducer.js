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
  let stateCopy = { ...state };
  let _addPost = () => {
    stateCopy.posts = [...state.posts];
    let newPost = {
      id: stateCopy.posts.length + 1,
      message: stateCopy.newPostText,
      image: defaultImage,
    };
    stateCopy.posts.push(newPost);
    _zeroingPost();
  };

  let _updateNewPostText = (text) => {
    stateCopy.newPostText = text;
  };

  let _zeroingPost = () => {
    stateCopy.newPostText = "";
  };

  if (action.type === ADD_POST) {
    _addPost();
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    _updateNewPostText(action.text);
  }

  return stateCopy;
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
