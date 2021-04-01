import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  setUserProfile,
  getUserProfileStatusText,
  setUserProfileStatusText,
} from "../../redux/profilePageReducer";

import { withRouter } from "react-router-dom";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePageReducer.posts,
    newPostText: state.profilePageReducer.newPostText,
    profile: state.profilePageReducer.profile,
    profileStatusText: state.profilePageReducer.profileStatusText,
  };
};

let acObject = {
  addPost,
  onPostChange,
  setUserProfile,
  getUserProfileStatusText,
  setUserProfileStatusText,
};

export default compose(connect(mapStateToProps, acObject), withRouter)(Profile);
