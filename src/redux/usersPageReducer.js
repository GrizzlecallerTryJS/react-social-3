import { userAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_FOLLOW_STATUS = "SET_FOLLOW_STATUS";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";

const initState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 24,
  currentPage: 1,
  totalPages: [1, 2, 3],
  isFetching: false,
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

//-----------------//
//ActionCreators

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

//-----------------//
//ThunkCreators

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setTotalPages(data.totalCount, pageSize));
      dispatch(setUsers(data.items));
    });
  };
};

export const setCurrentPageOnClick = (newCurrentPage) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(newCurrentPage));
    userAPI.getUsers(newCurrentPage).then((data) => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
    });
  };
};

//в UserItem приходит актуальный `followed` и оттуда диспатчится противоположное значение

export const setFollowStatusThunkCreator = (id, status) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(id, true));
    userAPI.setFollowStatus(id, status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setFollowStatus(id, status));
        dispatch(setFollowingInProgress(id, false));
      }
    });
  };
};

export default usersPageReducer;
