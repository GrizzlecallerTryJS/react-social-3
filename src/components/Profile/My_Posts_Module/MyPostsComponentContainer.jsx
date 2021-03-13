import MyPostsComponent from "./MyPostsComponent";
import { addPost, onPostChange } from "../../../redux/profilePageReducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    state: state.profilePageReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPost());
    },
    onPostChange: (text) => {
      dispatch(onPostChange(text));
    },
  };
};

let MyPostsComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPostsComponent);

export default MyPostsComponentContainer;
