/*import defaultAvatar from "../assets/images/defaultAvatar.jpg";*/

/*const FOLLOW_BUTTON = "FOLLOW_BUTTON";*/
const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOW_STATUS = "SET_FOLLOW_STATUS";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";

const initState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 24,
  currentPage: 1,
  totalPages: [1, 2, 3],
  isFetching: false,
  forReload: 0,
  followingInProgress: [],
};

const usersPageReducer = (state = initState, action) => {
  let stateCopy = state;

  let _pagination = (totalUsersCount, pageSize) => {
    let total = Math.ceil(totalUsersCount / pageSize);
    stateCopy.totalUsersCount = totalUsersCount;
    for (let i = 1; i <= total; i++) {
      stateCopy.totalPages[i - 1] = i;
    }
  };

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

  let _setFollowingInProgress = (id, status) => {
    /*if (status) {
      stateCopy.followingInProgress = [...state.followingInProgress, id];
    } else {
      stateCopy.followingInProgress = [
        ...state.followingInProgress.filter((userID) => userID !== id),
      ];
    }*/
    /*status
      ? (stateCopy.followingInProgress = [...state.followingInProgress, id])
      : (stateCopy.followingInProgress = [
          ...state.followingInProgress.filter((userID) => userID !== id),
        ]);*/
    stateCopy = {
      ...state,
      followingInProgress: status
        ? [...state.followingInProgress, id]
        : [...state.followingInProgress.filter((userID) => userID !== id)],
    };
  };

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
  } else if (action.type === SET_FOLLOWING_IN_PROGRESS) {
    _setFollowingInProgress(action.id, action.status);
  }

  return stateCopy;
};

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

export const setFollowingInProgress = (id, status) => {
  return {
    type: SET_FOLLOWING_IN_PROGRESS,
    id,
    status,
  };
};

export default usersPageReducer;
