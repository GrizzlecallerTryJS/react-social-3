import { combineReducers, createStore } from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";

let allReducers = combineReducers({
  messagePageReducer: messagePageReducer,
  profilePageReducer: profilePageReducer,
});

let store = createStore(allReducers);

export default store;
