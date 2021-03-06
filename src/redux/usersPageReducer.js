import defaultAvatar from "../assets/images/defaultAvatar.jpg";

const FOLLOW_BUTTON = "FOLLOW_BUTTON";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initState = {
  users: [
    {
      id: 1,
      firstName: "BEEP",
      lastName: "BOOP",
      avatarPic: defaultAvatar,
      county: "Russia",
      city: "Moscow",
      about: "999",
      followStatus: false,
    },
    {
      id: 2,
      firstName: "QQQ",
      lastName: "WWW",
      avatarPic: defaultAvatar,
      county: "Russia",
      city: "1234",
      about: "999",
      followStatus: true,
    },
    {
      id: 3,
      firstName: "EEE",
      lastName: "SSS",
      avatarPic: defaultAvatar,
      county: "Russia",
      city: "Kherov",
      about: "999",
      followStatus: false,
    },
  ],
};

const usersPageReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _follow = (id) => {
    stateCopy.users = { ...state.users };
    stateCopy.users[id - 1].followStatus
      ? (stateCopy.users[id - 1].followStatus = false)
      : (stateCopy.users[id - 1].followStatus = true);
  };

  if (action.type === FOLLOW_BUTTON) {
    _follow(action.id);
  }

  return stateCopy;
};

export const followButtonAC = (userID) => {
  return {
    type: FOLLOW_BUTTON,
    id: userID,
  };
};

export default usersPageReducer;
