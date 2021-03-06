import { combineReducers, createStore } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

let allReducers = combineReducers({
  messagePageReducer: messagePageReducer,
  profilePageReducer: profilePageReducer,
  usersPageReducer: usersPageReducer,
});

let store = createStore(allReducers);

window.store = store;

export default store;
