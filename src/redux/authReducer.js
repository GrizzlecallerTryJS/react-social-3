import { authAPI } from "../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const SET_IS_AUTH = "SET_IS_AUTH";

let initState = {
  user: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
};

const authReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _setAuthUser = (user) => {
    stateCopy.user = { ...user };
  };

  let _setIsAuth = (isAuth) => {
    stateCopy.isAuth = isAuth;
  };

  if (action.type === SET_AUTH_USER) {
    _setAuthUser(action.user);
  } else if (action.type === SET_IS_AUTH) {
    _setIsAuth(action.isAuth);
  }

  return stateCopy;
};

export default authReducer;

export const setAuthUser = (user) => {
  return {
    type: SET_AUTH_USER,
    user,
  };
};

export const setIsAuth = (isAuth) => {
  return {
    type: SET_IS_AUTH,
    isAuth: isAuth,
  };
};

export const setAuthMe = () => (dispatch) => {
  return authAPI.authMe().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUser(data.data));
      dispatch(setIsAuth(true));
    }
  });
};

export const setAuthLogin = (data) => {
  return (dispatch) => {
    authAPI.authLogin(data.email, data.password).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthMe());
      }
    });
  };
};

export const setAuthLogout = (userNewIsAuthState) => {
  return (dispatch) => {
    authAPI.authLogout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setIsAuth(userNewIsAuthState));
        dispatch(setAuthUser(initState.user));
      }
    });
  };
};
