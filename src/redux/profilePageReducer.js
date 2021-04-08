import defaultImage from "../assets/images/defaultImage.png";
import defaultAvatar from "../assets/images/defaultAvatar.jpg";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_PROFILE = "SET_PROFILE";
const SET_PROFILE_STATUS_TEXT = "SET_PROFILE_STATUS_TEXT";

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
    lookingForAJobDescription: null,
  },
  profileStatusText: "",
};

const profilePageReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _addPost = (text) => {
    let newPost = {
      id: stateCopy.posts.length + 1,
      message: text,
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

  let _setProfileStatusText = (text) => {
    stateCopy.profileStatusText = text;
  };

  if (action.type === ADD_POST) {
    _addPost(action.text);
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    _updateNewPostText(action.text);
  } else if (action.type === SET_PROFILE) {
    _setProfile(action.profile);
  } else if (action.type === SET_PROFILE_STATUS_TEXT) {
    _setProfileStatusText(action.text);
  }

  return stateCopy;
};

export default profilePageReducer;

export const addPost = (text) => {
  return {
    type: ADD_POST,
    text: text.newPost,
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

export const setProfileStatusText = (text) => {
  return {
    type: SET_PROFILE_STATUS_TEXT,
    text: text,
  };
};

export const setUserProfile = (userID) => {
  return (dispatch) =>
    profileAPI.getUserProfile(userID).then((data) => {
      dispatch(setProfile(data));
    });
};

export const getUserProfileStatusText = (userID) => {
  return (dispatch) => {
    profileAPI.getUserProfileStatus(userID).then((data) => {
      dispatch(setProfileStatusText(data));
    });
  };
};

export const setUserProfileStatusText = (text) => {
  return (dispatch) => {
    profileAPI.setUserProfileStatus(text).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setProfileStatusText(text));
      }
    });
  };
};
