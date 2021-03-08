import defaultAvatar from "../assets/images/defaultAvatar.jpg";

const FOLLOW_BUTTON = "FOLLOW_BUTTON";
const SET_USERS = "SET_USERS";

const initState = {
  users: [],
};

const usersPageReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _follow = (userID) => {
    stateCopy.users = [...state.users];
    stateCopy.users.map((u) => {
      if (u.id === userID && u.followStatus === false) {
        u.followStatus = true;
      } else if (u.id === userID && u.followStatus === true) {
        u.followStatus = false;
      }
    });
  };

  let _setUsers = (users) => {
    stateCopy.users = [...users];
  };

  if (action.type === FOLLOW_BUTTON) {
    _follow(action.id);
  } else if (action.type === SET_USERS) {
    _setUsers(action.users);
  }

  return stateCopy;
};

export const followButtonAC = (userID) => {
  return {
    type: FOLLOW_BUTTON,
    id: userID,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export default usersPageReducer;
