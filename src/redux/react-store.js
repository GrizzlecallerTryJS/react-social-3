import { applyMiddleware, combineReducers, createStore } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let allReducers = combineReducers({
  messagePageReducer: messagePageReducer,
  profilePageReducer: profilePageReducer,
  usersPageReducer: usersPageReducer,
  authReducer: authReducer,
});

let store = createStore(allReducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
