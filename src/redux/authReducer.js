const SET_AUTH_USER = "SET_AUTH_USER";
const SET_IS_AUTH = "SET_IS_AUTH";

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
    stateCopy.user = { ...user };
    _setIsAuth(true);
  };

  let _setIsAuth = (auth) => {
    stateCopy.isAuth = auth;
  };

  if (action.type === SET_AUTH_USER) {
    _setAuthUser(action.user);
  } else if (action.type === SET_IS_AUTH) {
    _setIsAuth(action.auth);
  }

  return stateCopy;
};

export const setAuthUser = (user) => {
  return {
    type: SET_AUTH_USER,
    user,
  };
};

export const setIsAuth = (auth) => {
  return {
    type: SET_IS_AUTH,
    auth,
  };
};

export default authReducer;
