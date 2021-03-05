import React from "react";
import MyPostsComponent from "./MyPostsComponent";
import { addPostAC, onPostChangeAC } from "../../../redux/profilePageReducer";
import ContextProvider from "../../../ContextProvider";

const MyPostsComponentContainer = () => {
  return (
    <ContextProvider.Consumer>
      {(state) => {
        debugger;
        let store = state.getState().profilePageReducer;

        let addPost = () => {
          state.dispatch(addPostAC());
        };

        let onPostChange = (text) => {
          state.dispatch(onPostChangeAC(text));
        };

        return (
          <MyPostsComponent
            state={store}
            addPost={addPost}
            onPostChange={onPostChange}
          />
        );
      }}
    </ContextProvider.Consumer>
  );
};

export default MyPostsComponentContainer;
