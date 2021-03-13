import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  setProfile,
} from "../../redux/profilePageReducer";

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

export default connect(mapStateToProps, acObject)(Profile);
