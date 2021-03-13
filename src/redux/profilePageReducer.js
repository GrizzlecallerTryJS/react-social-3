import defaultImage from "../assets/images/defaultImage.png";
import defaultAvatar from "../assets/images/defaultAvatar.jpg";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_PROFILE = "SET_PROFILE";

const initState = {
  posts: [
    { id: 1, message: "BEEP", image: defaultImage },
    { id: 2, message: "BOOP", image: defaultImage },
  ],
  newPostText: "ddd5",
  profile: {
    aboutMe: "aboutMe",
    fullName: "fullName",
    userId: 8184,
    contacts: [
      { facebook: null },
      { website: null },
      { vk: null },
      { twitter: null },
      { instagram: null },
      { youtube: null },
      { github: null },
      { mainLink: null },
    ],
    photos: {
      small: defaultAvatar,
      large: defaultAvatar,
    },
    lookingForAJob: true,
    lookingForAJobDescription: "не ищу, а дурачусь",
  },
};

const profilePageReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _addPost = () => {
    let newPost = {
      id: stateCopy.posts.length + 1,
      message: stateCopy.newPostText,
      image: defaultImage,
    };

    stateCopy.posts = [...state.posts, newPost];

    _zeroingPost();
  };

  let _updateNewPostText = (text) => {
    stateCopy.newPostText = text;
  };

  let _zeroingPost = () => {
    stateCopy.newPostText = "";
  };

  let _setProfile = (profile) => {
    stateCopy.profile = { ...profile, contacts: profile.contacts };
  };

  if (action.type === ADD_POST) {
    _addPost();
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    _updateNewPostText(action.text);
  } else if (action.type === SET_PROFILE) {
    _setProfile(action.profile);
  }

  return stateCopy;
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export const onPostChange = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text,
  };
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile: profile,
  };
};

export default profilePageReducer;
