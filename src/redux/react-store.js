import { applyMiddleware, combineReducers, createStore } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

let allReducers = combineReducers({
  messagePageReducer,
  profilePageReducer,
  usersPageReducer,
  authReducer,
  appReducer,
});

let store = createStore(allReducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
