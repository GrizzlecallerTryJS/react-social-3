import { setAuthMe } from "./authReducer";

const SET_INIT = "SET_INIT";

let initState = {
  initializeState: false,
};

const appReducer = (state = initState, action) => {
  let stateCopy = { ...state };

  const _initAppSuccess = (initializeState) => {
    stateCopy.initializeState = initializeState;
  };

  if (action.type === SET_INIT) {
    _initAppSuccess(action.initializeState);
  }

  return stateCopy;
};

export default appReducer;

export const initAppSuccess = (initializeState) => {
  return {
    type: SET_INIT,
    initializeState,
  };
};

export const initializeApp = () => (dispatch) => {
  /*dispatch(setAuthMe()).then(() => {
    dispatch(initAppSuccess(true));
  });*/

  let promise = dispatch(setAuthMe());
  Promise.all([promise]).then(() => {
    dispatch(initAppSuccess(true));
  });
};
