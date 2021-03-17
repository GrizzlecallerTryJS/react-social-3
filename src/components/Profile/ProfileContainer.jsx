import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  setProfile,
} from "../../redux/profilePageReducer";

import { withRouter } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePageReducer.posts,
    newPostText: state.profilePageReducer.newPostText,
    profile: state.profilePageReducer.profile,
  };
};

let acObject = {
  addPost,
  onPostChange,
  setProfile,
};

let profileWithRouter = withRouter(Profile);

export default connect(mapStateToProps, acObject)(profileWithRouter);