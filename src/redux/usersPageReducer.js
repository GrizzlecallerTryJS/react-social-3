/*import defaultAvatar from "../assets/images/defaultAvatar.jpg";*/

/*const FOLLOW_BUTTON = "FOLLOW_BUTTON";*/
const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOW_STATUS = "SET_FOLLOW_STATUS";

const initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 24,
  currentPage: 1,
  totalPages: [1, 2, 3],
  isFetching: false,
  forReload: 0,
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

  //OLD

  /*  let _follow = (userID) => {
    stateCopy.users = [...state.users];
    stateCopy.users.map((u) => {
      if (u.id === userID && u.followed === false) {
        u.followed = true;
      } else if (u.id === userID && u.followed === true) {
        u.followed = false;
      }
      return stateCopy;
    });
  };*/

  let _setFollowStatus = (id, status) => {
    stateCopy.users.map((u) => {
      if (u.id === id) {
        u.followed = status;
      }
    });
    stateCopy.forReload += 1;
  };

  let _setCurrentPage = (page) => {
    stateCopy.currentPage = page;
  };

  let _setUsers = (users) => {
    stateCopy.users = [...users];
  };

  let _setIsFetching = (isFetching) => {
    stateCopy.isFetching = isFetching;
  };

  //OLD

  /*if (action.type === FOLLOW_BUTTON) {
    _follow(action.id);
  } else*/

  if (action.type === SET_USERS) {
    _setUsers(action.users);
  } else if (action.type === SET_TOTAL_PAGES) {
    _pagination(action.totalUsersCount, action.pageSize);
  } else if (action.type === SET_CURRENT_PAGE) {
    _setCurrentPage(action.page);
  } else if (action.type === SET_IS_FETCHING) {
    _setIsFetching(action.isFetching);
  } else if (action.type === SET_FOLLOW_STATUS) {
    _setFollowStatus(action.id, action.status);
  }

  return stateCopy;
};

//OLD

/*export const followButton = (userID) => {
  return {
    type: FOLLOW_BUTTON,
    id: userID,
  };
};*/

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export const setTotalPages = (totalUsersCount, pageSize) => {
  return {
    type: SET_TOTAL_PAGES,
    totalUsersCount: totalUsersCount,
    pageSize: pageSize,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page,
  };
};

export const setIsFetching = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const setFollowStatus = (id, status) => {
  return {
    type: SET_FOLLOW_STATUS,
    id,
    status,
  };
};

export default usersPageReducer;
