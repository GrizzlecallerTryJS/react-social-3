import React from "react";
import MyPostsComponent from "./MyPostsComponent";
import { addPostAC, onPostChangeAC } from "../../../redux/profilePageReducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.profilePageReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    onPostChange: (text) => {
      dispatch(onPostChangeAC(text));
    },
  };
};

let MyPostsComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPostsComponent);

export default MyPostsComponentContainer;
