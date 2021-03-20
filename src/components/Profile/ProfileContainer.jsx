import Profile from "./Profile";
import { connect } from "react-redux";
import {
  addPost,
  onPostChange,
  setUserProfile,
} from "../../redux/profilePageReducer";

import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
  setUserProfile,
};

export default compose(
  connect(mapStateToProps, acObject),
  withRouter,
  withAuthRedirect
)(Profile);
