import React from "react";
import MyPostsComponent from "./MyPostsComponent";
import { addPostAC, onPostChangeAC } from "../../../redux/profilePageReducer";

const MyPostsComponentContainer = (props) => {
  let store = props.state.getState().profilePageReducer;

  let addPost = () => {
    props.state.dispatch(addPostAC());
  };

  let onPostChange = (text) => {
    debugger;
    props.state.dispatch(onPostChangeAC(text));
  };

  return (
    <MyPostsComponent
      state={store}
      addPost={addPost}
      onPostChange={onPostChange}
    />
  );
};

export default MyPostsComponentContainer;
