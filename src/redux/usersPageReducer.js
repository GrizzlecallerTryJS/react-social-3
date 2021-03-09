/*import defaultAvatar from "../assets/images/defaultAvatar.jpg";*/

const FOLLOW_BUTTON = "FOLLOW_BUTTON";
const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

const initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 24,
  currentPage: 1,
  totalPages: [1, 2, 3],
};

const usersPageReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _pagination = (totalUsersCount, pageSize) => {
    let total = Math.ceil(totalUsersCount / pageSize);
    stateCopy.totalUsersCount = totalUsersCount;
    for (let i = 1; i <= total; i++) {
      stateCopy.totalPages[i - 1] = i;
    }
  };

  let _follow = (userID) => {
    stateCopy.users = [...state.users];
    stateCopy.users.map((u) => {
      if (u.id === userID && u.followed === false) {
        u.followed = true;
      } else if (u.id === userID && u.followed === true) {
        u.followed = false;
      }
      return stateCopy;
    });
  };

  let _setUsers = (users) => {
    stateCopy.users = [...users];
  };

  if (action.type === FOLLOW_BUTTON) {
    _follow(action.id);
  } else if (action.type === SET_USERS) {
    _setUsers(action.users);
  } else if (action.type === SET_TOTAL_PAGES) {
    _pagination(action.totalUsersCount, action.pageSize);
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

export const setTotalPagesAC = (totalUsersCount, pageSize) => {
  return {
    type: SET_TOTAL_PAGES,
    totalUsersCount: totalUsersCount,
    pageSize: pageSize,
  };
};

export default usersPageReducer;
