import { authAPI } from "../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";

let initState = {
  user: {
    email: null,
    id: null,
    login: null,
  },
  isAuth: false,
};

const authReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  let _setAuthUser = (user) => {
    stateCopy = { user: user, isAuth: true };
  };

  if (action.type === SET_AUTH_USER) {
    _setAuthUser(action.user);
  }

  return stateCopy;
};

export const setAuthUser = (user) => {
  return {
    type: SET_AUTH_USER,
    user,
  };
};

export default authReducer;

export const setAuthMe = () => {
  return (dispatch) => {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUser(data.data));
      }
    });
  };
};

export const setAuthLogin = (data) => {
  return (dispatch) => {
    authAPI.authLogin(data.email, data.password).then((data) => {
      if (data.resultCode === 0) {
        setAuthMe();
      }
    });
  };
};
